# 📛 react-tech-slider

A reusable React component for displaying a sliding list of icons with continuous animation. Perfect for portfolios, agencies, landing pages, etc.

---

## 🚀 Installation

```bash
npm install react-tech-slider
```
---

## 🌐 Live Demo

👉 [View Demo](https://stackblitz.com)

---

## ✅ Basic Usage

```tsx
import { Slider } from 'react-tech-slider/all-in-one';

export const techStack = [
    {
        id: 1,
        name: 'Nike',
        img: 'https://img.icons8.com/ios-filled/500/nike.png'
    },
    {
        id: 2,
        name: 'Adidas',
        img: 'https://img.icons8.com/ios/500/adidas-trefoil.png'
    },
    {
        id: 3,
        name: 'Jordan',
        img: 'https://img.icons8.com/ios/500/air-jordan.png'
    }
]

<Slider technologies={techStack} />
```

## ✨ Available Props

| Prop | Type | Required | Description |
|------|------|-----------|-------------|
| `technologies` | `Technology[]` | ✅ | Array of technologies to display |
| `borderColor` | `string` | ❌ | Color of top and bottom borders (#hex) |
| `backgroundColor` | `string` | ❌ | Background color of the list (#hex) |
| `borderWidth` | `number` | ❌ | Border width (px) |
| `iconWidth` | `number` | ❌ | Icon width (rem) |
| `iconHeight` | `number` | ❌ | Icon height (rem) |

### Interface

```typescript
interface Technology {
  id: number;
  name: string;
  img: string | JSX.Element;
}
```

## 🎨 Customization

- Supports SVG images as URLs or JSX components
- Width, color and number of items are dynamic via props
- Adaptable styles with media queries and CSS variables

## 🧪 Fully Customized Example

```tsx
<Slider 
  technologies={techStack} 
  borderWidth={2} 
  borderColor='#0cf' 
  backgroundColor='#9cf' 
  iconWidth={7} 
  iconHeight={7} 
/>
```

## 📦 Build and Publish

```bash
npm run build
npm publish
```

## 🤝 Contributions

Pull requests and suggestions are welcome at  
👉 [https://github.com/T0N1-Dev/react-tech-slider](https://github.com/T0N1-Dev/react-tech-slider)


[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/T0N1-Dev/react-tech-slider)
[![npm](https://www.npmjs.com/package/react-tech-slider?activeTab=readme)](https://img.shields.io/npm/v/react-tech-slider)


