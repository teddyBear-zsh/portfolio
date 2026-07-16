import fs from 'fs';
import path from 'path';

const SRC = path.join(process.cwd(), 'src');

const files = {
  'data/experience.ts': `export const experience = [
  {
    role: "Cloud Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Designing and implementing scalable cloud architectures on AWS. Optimizing CI/CD pipelines and infrastructure as code.",
    technologies: ["AWS", "Terraform", "Kubernetes", "Docker"]
  },
  {
    role: "Backend Developer",
    company: "Startup Inc",
    period: "2021 - 2023",
    description: "Developed microservices architecture using Node.js and Python. Improved database query performance by 40%.",
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis"]
  }
];
`,
  'data/projects.ts': `export const projects = [
  {
    name: "Cloud Architect Sandbox",
    description: "An automated environment provisioning tool for testing cloud architectures safely and cost-effectively.",
    technologies: ["AWS CDK", "TypeScript", "Python"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    name: "Microservice Monitor",
    description: "Real-time monitoring and alerting system for distributed microservices with custom dashboard.",
    technologies: ["Go", "React", "Prometheus", "Grafana"],
    github: "https://github.com"
  }
];
`,
  'data/tools.ts': `export const tools = [
  {
    name: "AWS Resource Tagger",
    description: "CLI utility to bulk tag AWS resources based on cost-center definitions.",
    category: "CLI",
    technologies: ["Python", "Boto3"],
    github: "https://github.com"
  },
  {
    name: "Markdown to Medium",
    description: "Automated script to convert and publish local Markdown articles directly to Medium via API.",
    category: "Automation",
    technologies: ["Node.js", "Markdown"],
    github: "https://github.com"
  }
];
`,
  'data/blog.ts': `export const articles = [
  {
    title: "Mastering Terraform State Management",
    summary: "Best practices for managing Terraform state in large-scale distributed teams to prevent conflicts.",
    date: "Oct 15, 2023",
    readTime: "5 min read",
    tags: ["Terraform", "DevOps", "AWS"],
    link: "https://medium.com"
  },
  {
    title: "Building Resilient Microservices",
    summary: "Patterns for designing microservices that can withstand partial failures without cascading.",
    date: "Sep 02, 2023",
    readTime: "8 min read",
    tags: ["Architecture", "Backend", "Go"],
    link: "https://medium.com"
  }
];
`,
  'data/skills.ts': `export const skillCategories = [
  {
    name: "Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"]
  },
  {
    name: "Frontend",
    skills: ["Astro", "TypeScript", "Tailwind CSS", "React"]
  },
  {
    name: "DevOps",
    skills: ["GitHub Actions", "GitLab CI", "Linux", "Prometheus"]
  }
];
`,
  'components/sections/About.astro': `---
---
<section id="about" class="py-20 max-w-4xl mx-auto px-6">
  <h2 class="text-3xl font-bold font-heading mb-8 text-text flex items-center gap-4">
    <span class="text-primary font-mono text-xl">01.</span> About Me
  </h2>
  
  <div class="prose prose-invert max-w-none text-text-muted text-lg leading-relaxed space-y-6">
    <p>
      Hello! I'm a passionate engineer with a deep interest in distributed systems and cloud architecture. My journey in tech started with writing simple automation scripts, which eventually evolved into designing scalable infrastructures for high-traffic applications.
    </p>
    <p>
      Currently, my main focus is on building resilient backend services and bridging the gap between development and operations through DevOps practices. I believe in Infrastructure as Code and the power of automation to eliminate repetitive tasks.
    </p>
    <p>
      When I'm not architecting systems or writing code, you can find me sharing my knowledge through technical writing on Medium, exploring new CNCF projects, or contributing to open-source developer tools.
    </p>
  </div>
</section>
`,
  'components/sections/Experience.astro': `---
import { experience } from '../../data/experience';
---
<section id="experience" class="py-20 max-w-4xl mx-auto px-6">
  <h2 class="text-3xl font-bold font-heading mb-12 text-text flex items-center gap-4">
    <span class="text-primary font-mono text-xl">02.</span> Experience
  </h2>
  
  <div class="relative border-l border-border ml-3 md:ml-6 space-y-12">
    {experience.map((job) => (
      <div class="relative pl-8 md:pl-10">
        <div class="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 class="text-xl font-bold text-text">{job.role} <span class="text-primary">@ {job.company}</span></h3>
          <span class="text-sm font-mono text-text-muted mt-1 md:mt-0">{job.period}</span>
        </div>
        <p class="text-text-muted mb-4">{job.description}</p>
        <div class="flex flex-wrap gap-2">
          {job.technologies.map(tech => (
            <span class="px-2 py-1 bg-surface border border-border text-xs rounded-md text-text-muted">{tech}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
`,
  'components/sections/Projects.astro': `---
import { projects } from '../../data/projects';
---
<section id="projects" class="py-20 max-w-6xl mx-auto px-6">
  <h2 class="text-3xl font-bold font-heading mb-12 text-text flex items-center gap-4">
    <span class="text-primary font-mono text-xl">03.</span> Featured Projects
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project) => (
      <div class="group bg-surface border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="flex justify-between items-start mb-6">
          <div class="p-3 bg-primary/10 text-primary rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
          <div class="flex gap-4 text-text-muted">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            )}
          </div>
        </div>
        <h3 class="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
        <p class="text-text-muted mb-6 line-clamp-3">{project.description}</p>
        <div class="flex flex-wrap gap-3 mt-auto">
          {project.technologies.map(tech => (
            <span class="text-xs font-mono text-accent">{tech}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
`,
  'components/sections/Tools.astro': `---
import { tools } from '../../data/tools';
---
<section id="tools" class="py-20 max-w-6xl mx-auto px-6">
  <h2 class="text-3xl font-bold font-heading mb-12 text-text flex items-center gap-4">
    <span class="text-primary font-mono text-xl">04.</span> Developer Tools
  </h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {tools.map((tool) => (
      <div class="bg-card/50 border border-border rounded-lg p-6 hover:bg-card transition-colors">
        <div class="flex justify-between items-center mb-4">
          <span class="px-2 py-1 bg-surface border border-border text-[10px] uppercase tracking-wider rounded text-text-muted font-bold">{tool.category}</span>
          {tool.github && (
            <a href={tool.github} target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-primary transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            </a>
          )}
        </div>
        <h3 class="text-lg font-bold text-text mb-2">{tool.name}</h3>
        <p class="text-sm text-text-muted mb-4">{tool.description}</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          {tool.technologies.map(tech => (
            <span class="text-[11px] font-mono text-primary/80">{tech}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
`,
  'components/sections/Blog.astro': `---
import { articles } from '../../data/blog';
---
<section id="blog" class="py-20 max-w-4xl mx-auto px-6">
  <div class="flex justify-between items-end mb-12">
    <h2 class="text-3xl font-bold font-heading text-text flex items-center gap-4">
      <span class="text-primary font-mono text-xl">05.</span> Writing
    </h2>
    <a href="https://medium.com" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-primary hover:underline underline-offset-4">
      View all on Medium
    </a>
  </div>
  
  <div class="space-y-8">
    {articles.map((article) => (
      <article class="group flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all">
        <div class="flex-1">
          <div class="flex items-center gap-4 text-xs font-mono text-text-muted mb-3">
            <span>{article.date}</span>
            <span class="w-1 h-1 rounded-full bg-border"></span>
            <span>{article.readTime}</span>
          </div>
          <h3 class="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h3>
          <p class="text-text-muted mb-4">{article.summary}</p>
          <div class="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span class="text-xs px-2 py-1 rounded-full bg-background border border-border text-text-muted">{tag}</span>
            ))}
          </div>
        </div>
        <div class="hidden md:flex items-center justify-center pl-6 border-l border-border opacity-0 group-hover:opacity-100 transition-opacity">
          <a href={article.link} target="_blank" rel="noopener noreferrer" class="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </article>
    ))}
  </div>
</section>
`,
  'components/sections/Skills.astro': `---
import { skillCategories } from '../../data/skills';
---
<section id="skills" class="py-20 max-w-6xl mx-auto px-6">
  <h2 class="text-3xl font-bold font-heading mb-12 text-text flex items-center gap-4">
    <span class="text-primary font-mono text-xl">06.</span> Skills & Technologies
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {skillCategories.map((category) => (
      <div>
        <h3 class="text-lg font-bold text-text mb-4 pb-2 border-b border-border">{category.name}</h3>
        <ul class="space-y-3">
          {category.skills.map(skill => (
            <li class="flex items-center gap-2 text-text-muted">
              <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
`,
  'components/sections/Contact.astro': `---
---
<section id="contact" class="py-32 max-w-2xl mx-auto px-6 text-center">
  <p class="text-primary font-mono text-sm mb-4">07. What's Next?</p>
  <h2 class="text-4xl md:text-5xl font-bold font-heading mb-6 text-text">Get In Touch</h2>
  
  <p class="text-text-muted text-lg mb-10 leading-relaxed">
    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
  </p>
  
  <a href="mailto:hello@example.com" class="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
    Say Hello
  </a>
</section>
`,
  'components/Footer.astro': `---
---
<footer class="py-8 text-center text-sm text-text-muted border-t border-border mt-auto">
  <div class="flex justify-center gap-6 mb-4">
    <a href="#" class="hover:text-primary transition-colors">GitHub</a>
    <a href="#" class="hover:text-primary transition-colors">LinkedIn</a>
    <a href="#" class="hover:text-primary transition-colors">Medium</a>
    <a href="#" class="hover:text-primary transition-colors">Instagram</a>
  </div>
  <p>Designed & Built with <a href="https://astro.build" target="_blank" class="text-text hover:text-primary transition-colors">Astro</a> & Tailwind CSS.</p>
  <p class="mt-2 text-xs opacity-60">&copy; {new Date().getFullYear()} Teddy. All rights reserved.</p>
</footer>
`
};

for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(SRC, file), content);
}

console.log("Sections created!");
