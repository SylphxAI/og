# 🎨 OG

**Beautiful Open Graph images for your GitHub projects**

Stop using static images that never update. Generate stunning social preview images dynamically with just a URL.

## ✨ Features

- 🎨 **6 Beautiful Themes** - Modern, Minimal, Vibrant, Gradient, Glass, Tech
- ⚡ **Lightning Fast** - Built with Bun for instant generation
- 🔧 **Fully Customizable** - Colors, text, icons, layouts via URL params
- 📦 **Zero Dependencies** - Pure TypeScript, no bloat
- 🚀 **Deploy Anywhere** - Vercel, Cloudflare Workers, or self-host

## 🚀 Quick Start

```bash
bun install
bun dev
```

Visit `http://localhost:3000` to see the landing page with examples.

## 📖 Usage

Generate images by visiting `/banner` with URL parameters:

```
/banner?title=MyProject&tagline=An awesome description&features=Fast,Secure,Simple&gradient=667eea,764ba2&icon=🚀&theme=modern
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | ✅ | Project name |
| `tagline` | string | ✅ | One-line description |
| `features` | string | ✅ | Comma-separated list (max 4) |
| `gradient` | string | ✅ | Two hex colors without #, e.g. `667eea,764ba2` |
| `icon` | string | ✅ | Emoji icon |
| `theme` | string | ❌ | `modern`, `minimal`, `vibrant`, `gradient`, `glass`, `tech` (default: `modern`) |
| `highlight` | string | ❌ | Highlighted text below tagline |
| `github` | string | ❌ | GitHub URL (defaults to `SylphxAI/{title}`) |

## 🎨 Themes

### Modern
Clean gradients with glassmorphism effects. Perfect for modern SaaS products.

### Minimal
Bold typography with clean lines. Great for developer tools.

### Vibrant
Energetic colors with dynamic design. Ideal for creative projects.

### Gradient
Smooth flowing gradients throughout. Beautiful for any project.

### Glass
Frosted glass morphism effect. Stunning for premium products.

### Tech
Futuristic with grid patterns. Perfect for technical libraries.

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

## 📸 Screenshot Generation

Use Playwright to convert HTML to PNG:

```typescript
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 640 } });
await page.goto('http://localhost:3000/banner?...');
await page.screenshot({ path: 'og-image.png', type: 'png' });
await browser.close();
```

## 🚀 Deployment

### Vercel
```bash
vercel
```

### Cloudflare Workers
```bash
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

## 🔗 Use as GitHub Social Preview

1. Deploy OG to production
2. Generate your banner URL
3. Screenshot the page (1280×640px)
4. Go to repo Settings → Social preview
5. Upload the image

Or use a service like https://og-playground.vercel.app/ to preview.

## 🛠️ Development

```bash
# Install dependencies
bun install

# Run dev server with hot reload
bun dev

# Build for production
bun build

# Run tests
bun test
```

## 📄 License

MIT © [SylphX](https://github.com/SylphxAI)

## 🙏 Credits

Inspired by:
- [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [GitHub Social Preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)

---

Made with ❤️ by [SylphX](https://github.com/SylphxAI)
