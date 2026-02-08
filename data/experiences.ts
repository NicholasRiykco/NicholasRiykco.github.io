export interface Experience {
  id: string;
  role: string;
  company: string;
  team?: string;
  location?: string;
  startDate: string;
  endDate: string | 'Present';
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-telstra-sre',
    role: 'Site Reliability Engineer',
    company: 'Telstra Accenture',
    team: 'Network Observability',
    location: 'Melbourne, Victoria',
    startDate: 'Dec 2024',
    endDate: 'Present',
    bullets: [
      'Developed distributed metric collector with Golang, MySQL, and Zookeeper to ingest 300K+ events from Kafka topics and network devices throughout Australia every 5 minutes via gRPC streaming writing to Prometheus time-series database. Enabling operational visibility for 100+ network devices and international performance metrics.',
      'Automated various processes by developing scripts and tools in Golang and Python and managed containerized deployments at scale using Ansible for VM-based workloads and ArgoCD for Kubernetes / OpenShift clusters.',
      'Architected collection strategy in Kubernetes cluster using OpenTelemetry, Grafana, VictoriaMetrics, Loki and Tempo to consolidate metrics, logs, and traces for 30+ microservices across Telstra observability stack.',
      'Managed Grafana observability platform serving 1200+ engineers across Telstra. Led change management on platform upgrades and optimization, achieving 99.95% availability SLAs and sub-50ms P95 latency.',
      'Built self-service platform to configure metric collection strategy (Golang REST APIs + TypeScript React + MySQL) for 100+ network devices, eliminating 20+ hours/month of manual provisioning overhead.',
      'Designed Grafana dashboards and monitoring alerts over logs and metrics for microservices and network traffic.',
      'Served as on-call engineer, collaborated on troubleshooting platform incidents for distributed systems.',
    ],
    technologies: ['Kubernetes', 'Grafana', 'Golang', 'Kafka', 'OpenTelemetry', 'Prometheus', 'Linux', 'ArgoCD', 'Ansible', 'VictoriaMetrics', 'Loki', 'Tempo', 'MySQL', 'Zookeeper', 'gRPC'],
  },
  {
    id: 'exp-telstra-swe',
    role: 'Software Engineer',
    company: 'Telstra',
    team: 'Customer Recommendation',
    location: 'Melbourne, Victoria',
    startDate: 'Feb 2024',
    endDate: 'Dec 2024',
    bullets: [
      'Extended event-driven recommendation engine serving 3M+ customers using Spring Boot (Java 17+) and AWS (Step Functions, Lambda, SQS, and DynamoDB) to support prepaid segments.',
      'Developed REST APIs delivering ML-generated customer sentiment scores and their root cause with Python and AWS (Lambda / API Gateway). Enabled proactive churn prevention from 8% to 95% of Telstra customer base.',
      'Shipped promotion functionality for core marketing campaign platforms in React (TypeScript), enabling new campaign types for marketing teams and projected to drive 60K+ unique users and revenue growth.',
      'Provisioned and managed AWS infrastructure for 15+ services via Terraform, ensuring consistent and reproducible deployments across three different environments.',
      'Built CI/CD pipelines in Bamboo with testing, security scanning, and deployment to AWS (S3, Lambda, and ECR).',
      'Ran performance testing framework using Locust/JMeter, simulating 1M+ API calls to validate SLO compliance across environments.',
    ],
    technologies: ['AWS', 'Python', 'Spring Boot', 'Java', 'React', 'TypeScript', 'Bamboo', 'Terraform', 'Lambda', 'DynamoDB', 'Step Functions', 'SQS', 'Locust', 'JMeter'],
  },
  {
    id: 'exp-unimelb',
    role: 'Casual Academic',
    company: 'University of Melbourne',
    team: 'Database Systems and Foundations of Computing',
    location: 'Melbourne, Victoria',
    startDate: 'Jun 2022',
    endDate: 'Jun 2024',
    bullets: [
      'Ran technical workshops on introductory programming concepts in Python, data structures and algorithms, database management systems and internals, and SQL.',
      'Supervised and assessed 100 students per semester across Foundations of Computing and Database Systems, evaluating coursework, assignments, and examinations.',
    ],
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Data Structures', 'Algorithms', 'Database Systems'],
  },
];
