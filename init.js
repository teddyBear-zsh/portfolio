
import fs from 'fs';
import path from 'path';

const SRC = path.join(process.cwd(), 'src');

const dirs = [
  'components/ui',
  'components/sections',
  'data',
];

dirs.forEach(d => fs.mkdirSync(path.join(SRC, d), { recursive: true }));

const files = {
  'styles/global.css': `@import "tailwindcss";

@theme {
  --color-background: var(--bg);
  --color-surface: var(--surface);
  --color-card: var(--card);
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  --color-text: var(--text);
  --color-text-muted: var(--text-muted);
  --color-border: var(--border);
  
  --font-sans: "Inter", sans-serif;
  --font-heading: "Space Grotesk", sans-serif;
}

@layer base {
  :root {
      --bg: #f8fafc;
      --surface: #ffffff;
      --card: #f1f5f9;
      --text: #111827;
      --text-muted: #64748b;
      --primary: #2563eb;
      --accent: #7c3aed;
      --border: rgba(15,23,42,.08);
  }

  .dark {
      --bg: #020617;
      --surface: #0f172a;
      --card: #111827;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #60a5fa;
      --accent: #a78bfa;
      --border: rgba(255,255,255,.08);
  }

  body {
      background-color: var(--bg);
      color: var(--text);
      @apply font-sans antialiased;
      transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
      @apply font-heading tracking-tight;
  }
}

/* Subtle background grid */
.bg-grid {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, var(--border) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse 60% 60% at 50% 0%, #000 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 0%, #000 70%, transparent 100%);
}
`,
  'layouts/Layout.astro': `---
import "../styles/global.css";

interface Props {
  title?: string;
  description?: string;
}

const { title = "Portfolio | Cloud Engineer", description = "Personal portfolio of a Cloud Engineer, Backend Developer, and Technical Writer" } = Astro.props;
---

<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    
    <title>{title}</title>
    <meta name="description" content={description} />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    
    <!-- Theme Script -->
    <script is:inline>
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
      
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      window.localStorage.setItem('theme', theme);
    </script>
  </head>
  <body class="relative min-h-screen flex flex-col">
    <!-- Subtle Background Element -->
    <div class="fixed inset-0 z-[-1] pointer-events-none bg-grid opacity-50"></div>
    <div class="fixed inset-0 z-[-2] pointer-events-none bg-background"></div>
    
    <slot />
  </body>
</html>
`,
  'components/ui/ThemeToggle.astro': `---
---
<button id="theme-toggle" class="p-2 rounded-lg hover:bg-surface border border-transparent hover:border-border transition-colors text-text-muted hover:text-text" aria-label="Toggle theme">
  <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
  <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>

<script>
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
  } else {
      themeToggleDarkIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', function() {
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      if (localStorage.getItem('theme')) {
          if (localStorage.getItem('theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
          }
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
          }
      }
  });
</script>
`,
  'components/Navigation.astro': `---
import ThemeToggle from './ui/ThemeToggle.astro';

const links = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Tools', url: '#tools' },
  { name: 'Blog', url: '#blog' },
  { name: 'Skills', url: '#skills' },
  { name: 'Contact', url: '#contact' },
];
---
<header class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="#" class="font-heading font-bold text-xl tracking-tight text-text">Portfolio<span class="text-primary">.</span></a>
    
    <nav class="hidden md:flex items-center gap-6">
      <ul class="flex items-center gap-6 text-sm font-medium text-text-muted">
        {links.map(link => (
          <li>
            <a href={link.url} class="hover:text-primary transition-colors">{link.name}</a>
          </li>
        ))}
      </ul>
      <div class="w-px h-5 bg-border"></div>
      <ThemeToggle />
    </nav>
    
    <div class="md:hidden flex items-center gap-4">
      <ThemeToggle />
      <button class="text-text-muted hover:text-text p-2" aria-label="Open menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>
</header>
`,
  'components/sections/Hero.astro': `---
---
<section id="home" class="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-start justify-center min-h-[80vh] max-w-6xl mx-auto px-6">
  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-text-muted mb-6">
    <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
    Available for new opportunities
  </div>
  
  <h1 class="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
    Building <span class="text-primary">scalable</span><br/> cloud architectures.
  </h1>
  
  <p class="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
    Hi, I'm a <strong class="text-text font-medium">Cloud Engineer, Backend Developer, & Technical Writer</strong>. I specialize in designing robust backend systems, DevOps automation, and writing about tech.
  </p>
  
  <div class="flex flex-wrap items-center gap-4">
    <a href="#projects" class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
      View Projects
    </a>
    <a href="#contact" class="px-6 py-3 bg-surface border border-border text-text rounded-lg font-medium hover:border-primary/50 transition-colors">
      Get in touch
    </a>
  </div>
</section>
`,
  'pages/index.astro': `---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/Navigation.astro';
import Hero from '../components/sections/Hero.astro';

// We will import more sections as we build them.
---

<Layout>
  <Navigation />
  <main>
    <Hero />
    <!-- Additional sections will be injected here -->
  </main>
</Layout>
`
};

for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(SRC, file), content);
}

console.log("Initialization complete!");
