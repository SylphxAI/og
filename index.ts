import { themes, type ThemeConfig } from './themes';

interface BannerConfig {
  title: string;
  tagline: string;
  features: string[];
  gradient: [string, string];
  icon: string;
  github?: string;
  highlight?: string;
  theme?: string;
}

function generateBannerHTML(config: BannerConfig): string {
  const {
    title,
    tagline,
    features,
    gradient,
    icon,
    github = `github.com/SylphxAI/${title.toLowerCase()}`,
    highlight,
    theme = 'modern',
  } = config;

  const selectedTheme = themes[theme] || themes.modern;
  const themeCSS = selectedTheme.generateCSS({ gradient });

  const featureIcons = ['⚡', '🎯', '📦', '🚀', '💎', '🪶', '🧘', '📊', '📈', '⚙️', '🔥', '✨'];
  const featureItems = features
    .map(
      (feature, i) => `
            <div class="feature">
                <div class="feature-icon">${featureIcons[i % featureIcons.length]}</div>
                <span>${feature}</span>
            </div>`
    )
    .join('');

  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            width: 1280px;
            height: 640px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Helvetica Neue', sans-serif;
            overflow: hidden;
        }
        .container {
            border-radius: 24px;
            padding: 60px 80px;
            width: 1120px;
            height: 520px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            z-index: 1;
        }
        .header {
            display: flex;
            align-items: center;
            gap: 24px;
        }
        .icon {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            flex-shrink: 0;
        }
        h1 {
            font-size: 72px;
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1;
        }
        .tagline {
            font-size: 36px;
            color: #2d3748;
            font-weight: 600;
            margin: 24px 0;
            line-height: 1.4;
            letter-spacing: -0.01em;
        }
        .highlight {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            padding: 10px 20px;
            border-radius: 12px;
            font-size: 28px;
            font-weight: 700;
            color: #2d3748;
            display: inline-block;
            margin-top: 12px;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }
        .features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin: 32px 0;
        }
        .feature {
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 24px;
            color: #4a5568;
            font-weight: 500;
        }
        .feature-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
        }
        .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 24px;
            border-top: 2px solid #e2e8f0;
        }
        .github {
            font-size: 22px;
            color: #718096;
            font-weight: 500;
            letter-spacing: -0.01em;
        }

        /* Theme-specific styles */
        ${themeCSS}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="icon">${icon}</div>
            <h1>${title}</h1>
        </div>
        <div class="tagline">
            ${tagline}
            ${highlight ? `<div class="highlight">${highlight}</div>` : ''}
        </div>
        <div class="features">
            ${featureItems}
        </div>
        <div class="footer">
            <div class="github">${github}</div>
        </div>
    </div>
</body>
</html>`;
}

function generateLandingPage(): string {
  const themeExamples = Object.entries(themes)
    .map(
      ([key, theme]) => `
      <div class="theme-card">
        <h3>${theme.name}</h3>
        <p>${theme.description}</p>
        <a href="/banner?title=Demo&tagline=Beautiful social preview images&features=Feature 1,Feature 2,Feature 3,Feature 4&gradient=667eea,764ba2&icon=🎨&theme=${key}" class="btn-preview">Preview</a>
      </div>
    `
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OG - Beautiful Open Graph Images</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        header {
            text-align: center;
            padding: 60px 0;
            color: white;
        }
        h1 {
            font-size: 72px;
            font-weight: 800;
            margin-bottom: 20px;
            letter-spacing: -0.03em;
        }
        .subtitle {
            font-size: 28px;
            font-weight: 400;
            opacity: 0.95;
            margin-bottom: 40px;
        }
        .hero-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .btn {
            padding: 16px 40px;
            border-radius: 12px;
            font-size: 18px;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }
        .btn-primary {
            background: white;
            color: #667eea;
        }
        .btn-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            backdrop-filter: blur(10px);
        }
        .section {
            background: white;
            border-radius: 24px;
            padding: 60px;
            margin: 40px 0;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }
        h2 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 40px;
            color: #1a202c;
        }
        .themes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin: 40px 0;
        }
        .theme-card {
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            padding: 24px;
            transition: all 0.3s;
        }
        .theme-card:hover {
            border-color: #667eea;
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
            transform: translateY(-4px);
        }
        .theme-card h3 {
            font-size: 24px;
            margin-bottom: 8px;
            color: #1a202c;
        }
        .theme-card p {
            color: #718096;
            margin-bottom: 16px;
        }
        .btn-preview {
            display: inline-block;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.2s;
        }
        .btn-preview:hover {
            background: #5568d3;
        }
        .usage {
            background: #f7fafc;
            border-radius: 16px;
            padding: 32px;
            margin: 32px 0;
        }
        .code-block {
            background: #2d3748;
            color: #e2e8f0;
            padding: 24px;
            border-radius: 12px;
            overflow-x: auto;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 14px;
            line-height: 1.6;
        }
        .params {
            display: grid;
            gap: 16px;
            margin: 24px 0;
        }
        .param {
            display: flex;
            gap: 12px;
            padding: 16px;
            background: #f7fafc;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        .param-name {
            font-weight: 700;
            color: #667eea;
            min-width: 120px;
        }
        .param-desc {
            color: #4a5568;
        }
        footer {
            text-align: center;
            padding: 40px 0;
            color: white;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
            margin: 40px 0;
        }
        .feature-item {
            text-align: center;
        }
        .feature-icon-large {
            font-size: 48px;
            margin-bottom: 16px;
        }
        .feature-item h3 {
            font-size: 20px;
            margin-bottom: 8px;
            color: #1a202c;
        }
        .feature-item p {
            color: #718096;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>🎨 OG</h1>
            <p class="subtitle">Beautiful Open Graph images for your GitHub projects</p>
            <div class="hero-buttons">
                <a href="#themes" class="btn btn-primary">Explore Themes</a>
                <a href="https://github.com/SylphxAI/og" class="btn btn-secondary">View on GitHub</a>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="section">
            <h2>✨ Features</h2>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon-large">🎨</div>
                    <h3>6 Beautiful Themes</h3>
                    <p>Choose from modern, minimal, vibrant, gradient, glass, and tech styles</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon-large">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>Built with Bun for instant generation</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon-large">🔧</div>
                    <h3>Fully Customizable</h3>
                    <p>Control colors, text, icons, and more via URL params</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon-large">📦</div>
                    <h3>Zero Dependencies</h3>
                    <p>Pure TypeScript, no external libraries</p>
                </div>
            </div>
        </div>

        <div class="section" id="themes">
            <h2>🎨 Themes</h2>
            <div class="themes">
                ${themeExamples}
            </div>
        </div>

        <div class="section">
            <h2>📖 Usage</h2>
            <div class="usage">
                <h3 style="margin-bottom: 16px;">Basic Example</h3>
                <div class="code-block">GET /banner?title=MyProject&tagline=An awesome project&features=Fast,Secure,Simple&gradient=667eea,764ba2&icon=🚀&theme=modern</div>
            </div>

            <h3 style="margin: 32px 0 16px;">Parameters</h3>
            <div class="params">
                <div class="param">
                    <span class="param-name">title</span>
                    <span class="param-desc">Project name (required)</span>
                </div>
                <div class="param">
                    <span class="param-name">tagline</span>
                    <span class="param-desc">One-line description (required)</span>
                </div>
                <div class="param">
                    <span class="param-name">features</span>
                    <span class="param-desc">Comma-separated features, max 4 (required)</span>
                </div>
                <div class="param">
                    <span class="param-name">gradient</span>
                    <span class="param-desc">Two hex colors without # (required) e.g. 667eea,764ba2</span>
                </div>
                <div class="param">
                    <span class="param-name">icon</span>
                    <span class="param-desc">Emoji icon (required)</span>
                </div>
                <div class="param">
                    <span class="param-name">theme</span>
                    <span class="param-desc">Theme: modern, minimal, vibrant, gradient, glass, tech (optional, default: modern)</span>
                </div>
                <div class="param">
                    <span class="param-name">highlight</span>
                    <span class="param-desc">Highlighted text below tagline (optional)</span>
                </div>
                <div class="param">
                    <span class="param-name">github</span>
                    <span class="param-desc">GitHub URL (optional, defaults to SylphxAI/title)</span>
                </div>
            </div>

            <div class="usage" style="margin-top: 32px;">
                <h3 style="margin-bottom: 16px;">Real Examples</h3>
                <div class="code-block">
# Silk
/banner?title=Silk&tagline=Zero-runtime CSS-in-TS with 92% smaller bundles&features=Type-safe styling,92% smaller,Zero runtime,TypeScript&gradient=667eea,764ba2&icon=🎨&theme=modern

# Zen
/banner?title=Zen&tagline=Immutable state management&features=45× faster,Type-safe,Zero deps,Simple API&gradient=0f2027,2c5364&icon=☯️&theme=glass&highlight=Up to 45× faster

# Benchmark
/banner?title=Benchmark&tagline=Performance testing for TypeScript&features=Auto benchmarking,Regression detection,CI/CD integration,HTML reports&gradient=f093fb,f5576c&icon=📊&theme=vibrant
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>Made with ❤️ by <a href="https://github.com/SylphxAI" style="color: white; font-weight: 600;">SylphX</a></p>
            <p style="margin-top: 8px; opacity: 0.8;">Open source • MIT License</p>
        </div>
    </footer>
</body>
</html>`;
}

Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/') {
      return new Response(generateLandingPage(), {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (url.pathname === '/banner') {
      const title = url.searchParams.get('title');
      const tagline = url.searchParams.get('tagline');
      const featuresParam = url.searchParams.get('features');
      const gradientParam = url.searchParams.get('gradient');
      const icon = url.searchParams.get('icon');
      const github = url.searchParams.get('github');
      const highlight = url.searchParams.get('highlight');
      const theme = url.searchParams.get('theme') || 'modern';

      if (!title || !tagline || !featuresParam || !gradientParam || !icon) {
        return new Response('Missing required parameters: title, tagline, features, gradient, icon', {
          status: 400,
        });
      }

      const features = featuresParam.split(',').map((f) => f.trim());
      const gradient = gradientParam.split(',').map((c) => c.trim().replace('#', '')) as [string, string];

      if (features.length > 4) {
        return new Response('Maximum 4 features allowed', { status: 400 });
      }

      if (!themes[theme]) {
        return new Response(`Invalid theme. Available: ${Object.keys(themes).join(', ')}`, {
          status: 400,
        });
      }

      const config: BannerConfig = {
        title,
        tagline,
        features,
        gradient,
        icon,
        github: github || undefined,
        highlight: highlight || undefined,
        theme,
      };

      const html = generateBannerHTML(config);
      return new Response(html, { headers: { 'Content-Type': 'text/html' } });
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log('🎨 OG - Beautiful Open Graph images running on http://localhost:3000');
