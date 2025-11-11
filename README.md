<div align="center">

# OG 🎨

**Beautiful Open Graph images for GitHub projects - 6 themes, instant generation**

[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/SylphxAI/og/blob/main/LICENSE)
[![Bun](https://img.shields.io/badge/Bun-1.0+-orange?style=flat-square&logo=bun)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)

**6 beautiful themes** • **Lightning fast** • **Zero dependencies** • **Fully customizable**

[Examples](#-examples) • [Themes](#-themes) • [Usage](#-usage)

</div>

---

## 🚀 Overview

OG generates stunning Open Graph social preview images for your GitHub projects. Stop using static images that never update - create dynamic, beautiful banners with just a URL.

**The Problem:**
```
GitHub social previews today:
- Static images (outdated quickly)
- Manual design tools (slow)
- Inconsistent branding
- No customization
```

**The Solution:**
```
OG - URL-based image generation:
- 6 beautiful themes 🎨
- Dynamic via URL params ⚡
- Zero dependencies 📦
- Built with Bun 🚀
```

**Result: Professional GitHub social previews in seconds.**

---

## ✨ Features

### 6 Beautiful Themes

| Theme | Style | Perfect For |
|-------|-------|-------------|
| **Modern** | Clean gradients with glassmorphism | Modern SaaS products |
| **Minimal** | Bold typography with clean lines | Developer tools |
| **Vibrant** | Energetic colors with dynamic design | Creative projects |
| **Gradient** | Smooth flowing gradients throughout | Any project |
| **Glass** | Frosted glass morphism effect | Premium products |
| **Tech** | Futuristic with grid patterns | Technical libraries |

### Technical Features

- ⚡ **Lightning Fast** - Built with Bun for instant generation
- 🔧 **Fully Customizable** - Colors, text, icons, layouts via URL params
- 📦 **Zero Dependencies** - Pure TypeScript, no bloat
- 🚀 **Deploy Anywhere** - Vercel, Cloudflare Workers, or self-host
- 📸 **Playwright Integration** - Automated PNG generation

---

## 📖 Usage

Generate images by visiting `/banner` with URL parameters:

```
/banner?title=MyProject&tagline=An awesome description&features=Fast,Secure,Simple&gradient=667eea,764ba2&icon=🚀&theme=modern
```

### Parameters

| Parameter | Type | Required | Description | Default |
|-----------|------|----------|-------------|---------|
| `title` | string | ✅ | Project name | - |
| `tagline` | string | ✅ | One-line description | - |
| `features` | string | ✅ | Comma-separated list (max 4) | - |
| `gradient` | string | ✅ | Two hex colors without #, e.g. `667eea,764ba2` | - |
| `icon` | string | ✅ | Emoji icon | - |
| `theme` | string | ❌ | Theme name (see below) | `modern` |
| `highlight` | string | ❌ | Highlighted text below tagline | - |
| `github` | string | ❌ | GitHub URL | `SylphxAI/{title}` |

---

## 🎨 Themes

### Modern
```
/banner?...&theme=modern
```
Clean gradients with glassmorphism effects. Perfect for modern SaaS products.

### Minimal
```
/banner?...&theme=minimal
```
Bold typography with clean lines. Great for developer tools.

### Vibrant
```
/banner?...&theme=vibrant
```
Energetic colors with dynamic design. Ideal for creative projects.

### Gradient
```
/banner?...&theme=gradient
```
Smooth flowing gradients throughout. Beautiful for any project.

### Glass
```
/banner?...&theme=glass
```
Frosted glass morphism effect. Stunning for premium products.

### Tech
```
/banner?...&theme=tech
```
Futuristic with grid patterns. Perfect for technical libraries.

---

## 💡 Examples

### Silk (Zero-runtime CSS)
```
/banner?title=Silk&tagline=Zero-runtime CSS-in-TS with 92% smaller bundles&features=Type-safe styling,92% smaller,Zero runtime,TypeScript&gradient=667eea,764ba2&icon=🎨&theme=modern
```

### Zen (State Management)
```
/banner?title=Zen&tagline=Immutable state management with 1.7-45× better performance&features=45× faster,Type-safe,Zero deps,Simple API&gradient=0f2027,2c5364&icon=☯️&theme=glass&highlight=Up to 45× faster than Immer
```

### Benchmark (Performance Testing)
```
/banner?title=Benchmark&tagline=Automated performance testing for TypeScript&features=Auto benchmarking,Regression detection,CI/CD,HTML reports&gradient=f093fb,f5576c&icon=📊&theme=vibrant
```

---

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/SylphxAI/og.git
cd og

# Install dependencies
bun install

# Run development server
bun dev
```

Visit `http://localhost:3000` to see the landing page with examples.

### Build for Production

```bash
# Build
bun build

# Start production server
bun start
```

---

## 📸 Screenshot Generation

Use Playwright to convert HTML to PNG:

```typescript
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1280, height: 640 }
});

await page.goto('http://localhost:3000/banner?...');
await page.screenshot({
  path: 'og-image.png',
  type: 'png'
});

await browser.close();
```

**Output**: Perfect 1280×640px PNG for GitHub social previews.

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
bun install -g vercel

# Deploy
vercel
```

### Cloudflare Workers

```bash
# Install Wrangler
bun install -g wrangler

# Deploy
wrangler publish
```

### Docker

```dockerfile
FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
CMD ["bun", "start"]
```

Build and run:
```bash
docker build -t og .
docker run -p 3000:3000 og
```

---

## 🔗 Use as GitHub Social Preview

1. **Deploy** - Deploy OG to production (Vercel recommended)
2. **Generate URL** - Create your banner URL with desired parameters
3. **Screenshot** - Generate PNG screenshot (1280×640px)
4. **Upload** - Go to repo Settings → Social preview → Upload image

**Alternative**: Use https://og-playground.vercel.app/ to preview and download images.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Runtime** | Bun |
| **Language** | TypeScript (strict) |
| **Dependencies** | **Zero** - Pure TypeScript |
| **Screenshot** | Playwright (optional) |
| **Deployment** | Vercel, Cloudflare, Docker |

---

## 🧪 Development

```bash
# Install dependencies
bun install

# Run dev server with hot reload
bun dev

# Build for production
bun build

# Run tests
bun test

# Type checking
bun run typecheck
```

---

## 📦 Use Cases

### GitHub Social Previews
Perfect 1280×640px images for repository social cards:
- Twitter/X link previews
- LinkedIn shares
- Discord embeds
- Slack unfurls

### Project Documentation
Embed in README headers:
```markdown
![OG Image](https://og.sylphx.com/banner?title=Project&...)
```

### Marketing Assets
Consistent branding across platforms:
- Social media announcements
- Blog post headers
- Email campaigns
- Landing pages

---

## 🗺️ Roadmap

**✅ Completed**
- [x] 6 beautiful themes
- [x] Zero-dependency implementation
- [x] Bun-based generation
- [x] Playwright integration
- [x] Deployment flexibility

**🚀 Next**
- [ ] More themes (Neon, Retro, Brutalist)
- [ ] Custom fonts support
- [ ] Animation exports (GIF, MP4)
- [ ] Batch generation API
- [ ] Visual theme editor

---

## 🤝 Support

[![GitHub Issues](https://img.shields.io/github/issues/SylphxAI/og?style=flat-square)](https://github.com/SylphxAI/og/issues)

- 🐛 [Bug Reports](https://github.com/SylphxAI/og/issues)
- 💬 [Discussions](https://github.com/SylphxAI/og/discussions)
- 📧 [Email](mailto:hi@sylphx.com)

**Show Your Support:**
⭐ Star • 👀 Watch • 🐛 Report bugs • 💡 Suggest features • 🔀 Contribute

---

## 📄 License

MIT © [Sylphx](https://sylphx.com)

---

## 🙏 Credits

Inspired by:
- [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [GitHub Social Preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)

Built with ❤️ for the open source community

---

<p align="center">
  <strong>6 themes. Zero dependencies. Lightning fast.</strong>
  <br>
  <sub>Beautiful Open Graph images that actually look professional</sub>
  <br><br>
  <a href="https://sylphx.com">sylphx.com</a> •
  <a href="https://x.com/SylphxAI">@SylphxAI</a> •
  <a href="mailto:hi@sylphx.com">hi@sylphx.com</a>
</p>
