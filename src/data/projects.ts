export interface ProjectImage {
  src: string;   // e.g. "/assets/projects/cloud-architect-sandbox-diagram.png"
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  // Detail page fields
  problem?: string;
  solution?: string;
  design?: string;
  highlights?: string[];
  status?: string;
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "cloud-architect-sandbox",
    name: "Cloud Architect Sandbox",
    description: "An automated environment provisioning tool for testing cloud architectures safely and cost-effectively.",
    technologies: ["AWS CDK", "TypeScript", "Python"],
    github: "https://github.com",
    demo: "https://demo.com",
    problem: "Cloud architects need to test different infrastructure topologies without risking production costs or stability. Manually spinning up and tearing down environments is slow and error-prone.",
    solution: "An automated provisioning tool built on AWS CDK that lets you define sandbox environments declaratively. It provisions isolated VPCs, IAM roles, and resources on demand, then cleans everything up on a schedule to keep costs near zero.",
    design: "The core is a CDK construct library that abstracts common patterns (VPC, ECS cluster, RDS, etc.) behind composable building blocks. A Python CLI wraps the CDK commands and handles state tracking in DynamoDB. Environments are tagged with an expiry timestamp, and a Lambda runs nightly to destroy anything expired.",
    highlights: [
      "Reduced environment setup from 2 hours to under 5 minutes",
      "Cost savings of ~80% vs always-on staging environments",
      "Supports 12 pre-built architecture templates",
      "Full teardown guarantee via scheduled Lambda cleaner"
    ],
    status: "Active"
  },
  {
    slug: "serverless-receipts-processing",
    name: "Serverless Receipts Processing System",
    description: "A fully serverless pipeline that ingests, parses, and stores receipt data with real-time observability.",
    technologies: ["Go", "React", "Prometheus", "Grafana"],
    github: "https://github.com",
    problem: "Small businesses need to digitize paper receipts and track expenses without paying for heavyweight SaaS solutions. Existing tools are expensive or require manual data entry.",
    solution: "A serverless pipeline where receipts are uploaded to S3, triggering a Go Lambda that uses OCR to extract line items and totals. Parsed data lands in DynamoDB and is exposed via a React dashboard. Prometheus and Grafana provide full observability on processing latency and error rates.",
    design: "The system is event-driven end to end. S3 upload → SQS → Lambda (Go) → DynamoDB. The Go Lambda was chosen for its low cold-start time and efficient memory use. The React frontend queries a GraphQL API backed by Lambda. Grafana dashboards are pre-built and deployed as code.",
    highlights: [
      "Processes receipts in under 3 seconds end-to-end",
      "~$0 operational cost under 10k receipts/month (within free tier)",
      "Real-time Grafana dashboard with processing metrics",
      "OCR accuracy > 95% on printed receipts"
    ],
    status: "In Progress"
  }
];
