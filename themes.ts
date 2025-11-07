export interface Theme {
  name: string;
  description: string;
  generateCSS: (config: ThemeConfig) => string;
}

export interface ThemeConfig {
  gradient: [string, string];
  accentColor?: string;
}

export const themes: Record<string, Theme> = {
  modern: {
    name: 'Modern',
    description: 'Clean gradients with glassmorphism effects',
    generateCSS: ({ gradient }) => `
      body {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        position: relative;
        overflow: hidden;
      }
      body::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        border-radius: 50%;
      }
      .container {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
      }
      .icon {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      }
      h1 {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
      }
      .feature-icon {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    `,
  },

  minimal: {
    name: 'Minimal',
    description: 'Clean and simple with bold typography',
    generateCSS: ({ gradient }) => `
      body {
        background: #ffffff;
      }
      .container {
        background: #ffffff;
        border: 3px solid #000000;
        border-radius: 0;
        box-shadow: 12px 12px 0 #000000;
      }
      .icon {
        background: #000000;
        border-radius: 8px;
      }
      h1 {
        color: #000000;
        letter-spacing: -0.02em;
      }
      .tagline {
        color: #404040;
      }
      .feature-icon {
        background: #000000;
        border-radius: 4px;
      }
      .footer {
        border-top: 2px solid #000000;
      }
      .github {
        color: #404040;
      }
    `,
  },

  vibrant: {
    name: 'Vibrant',
    description: 'Bold colors with energetic design',
    generateCSS: ({ gradient }) => `
      body {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        position: relative;
      }
      body::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0,0,0,0.1) 0%, transparent 50%);
      }
      .container {
        background: rgba(255, 255, 255, 0.98);
        border-radius: 32px;
        box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
        transform: perspective(1000px) rotateX(2deg);
      }
      .icon {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        border-radius: 24px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        transform: rotate(-5deg);
      }
      h1 {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        transform: skewY(-2deg);
      }
      .feature-icon {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }
    `,
  },

  gradient: {
    name: 'Gradient',
    description: 'Smooth flowing gradients throughout',
    generateCSS: ({ gradient }) => `
      body {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 50%, #${gradient[0]} 100%);
      }
      .container {
        background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%);
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
      }
      .icon {
        background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255,255,255,0.5);
      }
      h1 {
        background: linear-gradient(90deg, #${gradient[0]} 0%, #${gradient[1]} 50%, #${gradient[0]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 200% auto;
      }
      .feature-icon {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        opacity: 0.9;
      }
    `,
  },

  glass: {
    name: 'Glass',
    description: 'Frosted glass morphism effect',
    generateCSS: ({ gradient }) => `
      body {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
      }
      .container {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(30px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow:
          0 8px 32px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.5);
      }
      .icon {
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      h1 {
        color: #ffffff;
        text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
      }
      .tagline {
        color: rgba(255, 255, 255, 0.95);
      }
      .feature {
        color: rgba(255, 255, 255, 0.9);
      }
      .feature-icon {
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .footer {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
      }
      .github {
        color: rgba(255, 255, 255, 0.8);
      }
      .highlight {
        background: rgba(255, 215, 0, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 215, 0, 0.4);
        color: #ffffff;
      }
    `,
  },

  tech: {
    name: 'Tech',
    description: 'Futuristic with grid patterns',
    generateCSS: ({ gradient }) => `
      body {
        background:
          linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 100% 100%, 40px 40px, 40px 40px;
        position: relative;
      }
      body::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
      }
      .container {
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow:
          0 0 80px rgba(0, 0, 0, 0.3),
          inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        position: relative;
      }
      .container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #${gradient[0]}, #${gradient[1]}, transparent);
      }
      .icon {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
        position: relative;
      }
      .icon::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        border-radius: inherit;
        filter: blur(10px);
        opacity: 0.5;
        z-index: -1;
      }
      h1 {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        position: relative;
      }
      .feature-icon {
        background: linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      }
    `,
  },
};
