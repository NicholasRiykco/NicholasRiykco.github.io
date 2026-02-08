import type { Experience } from '@/data/experiences';

// Synonym mapping for natural language understanding
const synonyms: Record<string, string[]> = {
  // Backend terms
  backend: ['go', 'golang', 'python', 'node', 'nodejs', 'server', 'api', 'rest', 'graphql', 'microservices', 'fastapi', 'express'],
  server: ['backend', 'api', 'microservices', 'node', 'express'],
  api: ['rest', 'graphql', 'backend', 'server', 'endpoint'],

  // Frontend terms
  frontend: ['react', 'vue', 'angular', 'javascript', 'typescript', 'ui', 'web', 'css', 'html', 'next', 'nextjs'],
  ui: ['frontend', 'react', 'interface', 'component', 'design'],
  web: ['frontend', 'react', 'javascript', 'html', 'css', 'browser'],

  // Infrastructure terms
  infrastructure: ['kubernetes', 'k8s', 'docker', 'aws', 'gcp', 'cloud', 'devops', 'terraform'],
  cloud: ['aws', 'gcp', 'azure', 'kubernetes', 'infrastructure', 'devops'],
  devops: ['kubernetes', 'docker', 'ci', 'cd', 'pipeline', 'infrastructure', 'cloud'],
  containers: ['docker', 'kubernetes', 'k8s'],

  // Database terms
  database: ['postgresql', 'postgres', 'mysql', 'mongodb', 'redis', 'sql', 'nosql', 'db', 'dynamodb', 'victoriametrics', 'zookeeper'],
  sql: ['postgresql', 'postgres', 'mysql', 'database'],
  nosql: ['mongodb', 'redis', 'dynamodb', 'database'],
  dynamodb: ['database', 'nosql', 'aws'],

  // Language expansions
  golang: ['go'],
  go: ['golang'],
  js: ['javascript'],
  ts: ['typescript'],
  py: ['python'],
  k8s: ['kubernetes'],
  postgres: ['postgresql'],
  node: ['nodejs', 'node.js'],
  nodejs: ['node', 'node.js'],
  next: ['nextjs', 'next.js'],
  nextjs: ['next', 'next.js'],

  // Role terms
  senior: ['lead', 'staff', 'principal', 'sr'],
  lead: ['senior', 'principal', 'staff', 'manager'],
  fullstack: ['full-stack', 'full stack', 'frontend', 'backend'],
  'full-stack': ['fullstack', 'full stack', 'frontend', 'backend'],

  // Domain terms
  streaming: ['kafka', 'event', 'realtime', 'real-time', 'pubsub'],
  messaging: ['kafka', 'queue', 'rabbitmq', 'pubsub', 'sqs'],
  observability: ['monitoring', 'prometheus', 'grafana', 'metrics', 'logging', 'tracing', 'opentelemetry', 'loki', 'tempo', 'victoriametrics'],
  monitoring: ['observability', 'prometheus', 'grafana', 'metrics', 'alerting'],
  metrics: ['prometheus', 'grafana', 'observability', 'monitoring', 'victoriametrics'],
  logs: ['loki', 'logging', 'observability'],
  tracing: ['tempo', 'jaeger', 'opentelemetry', 'observability'],

  // AWS terms
  aws: ['lambda', 'dynamodb', 's3', 'sqs', 'stepfunctions', 'ecr', 'apigateway', 'cloud', 'terraform'],
  lambda: ['aws', 'serverless', 'function'],
  serverless: ['lambda', 'aws', 'function'],

  // CI/CD terms
  cicd: ['bamboo', 'jenkins', 'github', 'argocd', 'pipeline', 'deployment'],
  pipeline: ['cicd', 'bamboo', 'jenkins', 'argocd'],

  // Testing terms
  testing: ['locust', 'jmeter', 'jest', 'junit', 'performance'],
  performance: ['locust', 'jmeter', 'load', 'testing'],
};

// Flatten synonyms for reverse lookup
const reverseSynonyms: Record<string, string[]> = {};
Object.entries(synonyms).forEach(([key, values]) => {
  values.forEach(value => {
    if (!reverseSynonyms[value]) {
      reverseSynonyms[value] = [];
    }
    if (!reverseSynonyms[value].includes(key)) {
      reverseSynonyms[value].push(key);
    }
  });
});

// Extract keywords from natural language query
export function extractKeywords(query: string): string[] {
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need',
    'want', 'looking', 'find', 'search', 'show', 'me', 'my', 'i', 'you',
    'your', 'work', 'experience', 'job', 'position', 'role', 'using',
    'used', 'working', 'worked', 'any', 'some', 'all', 'about', 'what',
    'where', 'when', 'which', 'who', 'how', 'that', 'this', 'these', 'those',
  ]);

  return query
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 1 && !stopWords.has(word));
}

// Expand keywords with synonyms
export function expandWithSynonyms(keywords: string[]): string[] {
  const expanded = new Set(keywords);

  keywords.forEach(keyword => {
    // Add direct synonyms
    const directSynonyms = synonyms[keyword] || [];
    directSynonyms.forEach(s => expanded.add(s));

    // Add reverse synonyms
    const reverse = reverseSynonyms[keyword] || [];
    reverse.forEach(s => expanded.add(s));
  });

  return Array.from(expanded);
}

// Levenshtein distance for fuzzy matching
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Fuzzy match score (0-1, higher is better)
function fuzzyMatch(query: string, target: string): number {
  const q = query.toLowerCase();
  const t = target.toLowerCase();

  // Exact match
  if (t === q) return 1;

  // Contains check
  if (t.includes(q)) return 0.9;
  if (q.includes(t)) return 0.8;

  // Prefix match
  if (t.startsWith(q)) return 0.85;

  // Levenshtein distance for typo tolerance
  const distance = levenshteinDistance(q, t);
  const maxLen = Math.max(q.length, t.length);
  const similarity = 1 - distance / maxLen;

  // Only accept if similarity is above threshold
  return similarity > 0.6 ? similarity * 0.7 : 0;
}

// Score weights for different fields
const WEIGHTS = {
  technology: 10,
  role: 7,
  company: 6,
  bullet: 3,
};

// Calculate match score for an experience
function calculateScore(experience: Experience, keywords: string[]): { score: number; matches: string[] } {
  let totalScore = 0;
  const matches: string[] = [];

  keywords.forEach(keyword => {
    let keywordScore = 0;

    // Check technologies (highest weight)
    experience.technologies.forEach(tech => {
      const score = fuzzyMatch(keyword, tech);
      if (score > 0) {
        keywordScore = Math.max(keywordScore, score * WEIGHTS.technology);
        if (score > 0.6 && !matches.includes(tech)) {
          matches.push(tech);
        }
      }
    });

    // Check role
    const roleScore = fuzzyMatch(keyword, experience.role);
    if (roleScore > 0) {
      keywordScore = Math.max(keywordScore, roleScore * WEIGHTS.role);
      if (roleScore > 0.6 && !matches.includes(experience.role)) {
        matches.push(experience.role);
      }
    }

    // Check company
    const companyScore = fuzzyMatch(keyword, experience.company);
    if (companyScore > 0) {
      keywordScore = Math.max(keywordScore, companyScore * WEIGHTS.company);
      if (companyScore > 0.6 && !matches.includes(experience.company)) {
        matches.push(experience.company);
      }
    }

    // Check bullets
    experience.bullets.forEach(bullet => {
      const words = bullet.toLowerCase().split(/\s+/);
      words.forEach(word => {
        const score = fuzzyMatch(keyword, word.replace(/[^\w]/g, ''));
        if (score > 0) {
          keywordScore = Math.max(keywordScore, score * WEIGHTS.bullet);
        }
      });
    });

    totalScore += keywordScore;
  });

  return { score: totalScore, matches };
}

export interface SearchResult {
  experience: Experience;
  score: number;
  matches: string[];
}

// Main search function
export function searchExperiences(
  experiences: Experience[],
  query: string
): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  // Extract and expand keywords
  const keywords = extractKeywords(query);
  if (keywords.length === 0) {
    return [];
  }

  const expandedKeywords = expandWithSynonyms(keywords);

  // Score all experiences
  const results: SearchResult[] = experiences
    .map(experience => {
      const { score, matches } = calculateScore(experience, expandedKeywords);
      return { experience, score, matches };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);

  return results;
}

// Get the best match
export function getBestMatch(
  experiences: Experience[],
  query: string
): SearchResult | null {
  const results = searchExperiences(experiences, query);
  return results.length > 0 ? results[0] : null;
}
