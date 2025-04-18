# 📛 react-tech-slider

A reusable and customizable **React slider component** to showcase brand logos or tech stacks with smooth infinite animation.  
Perfect for portfolios, agency pages, SaaS websites, and more.

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
import { Slider } from 'react-tech-slider';

const brands = [
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
];

<Slider brandsList={brands} />
```

## ✨ Available Props

| Prop | Type | Required | Description |
|------|------|-----------|-------------|
| `brandsList` | `Brand[]` | ✅ | Array of brands to render |
| `borderColor` | `string` | ❌ | Top/bottom border color (#hex or CSS color) |
| `backgroundColor` | `string` | ❌ | Background color (#hex, rgba, etc.) |
| `borderWidth` | `number` | ❌ | Border thickness in pixels |
| `iconWidth` | `number` | ❌ | 	Width of icons (in rem) — applied globally if individual width is not defined |

### Brand Interface

```typescript
interface Brand {
  id: number;
  name: string;
  img: string;
  width?: number; // rem
  height?: number; // rem
  style?: React.CSSProperties; 
  className?: string;
}
```

## 🎨 Customization

- Infinite scroll animation with CSS keyframes

- Fully responsive with clamp() and media queries

- Smart fallback to global or per-item icon sizing

- Optional inline styles via style prop

- Auto pausing animation on hover

- Masked edge gradient for smooth visual cut-off

## 🧪 Fully Customized Example

```tsx
<Slider 
  brandsList={brands}
  borderWidth={2}
  borderColor="#0cf"
  backgroundColor="#eef"
  iconWidth={7}
/>
```
- You can also define per-item sizes, class and styles:

```tsx
brandsList={[
  {
    id: 1,
    name: 'Nike',
    img: 'https://img.icons8.com/ios-filled/500/nike.png',
    width: 10,
    height: 10,
    style: { 'background-color': 'white' },
    className: 'nike-brand'
  },
  ...
]}
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
[![npm](https://img.shields.io/npm/v/react-tech-slider)](https://www.npmjs.com/package/react-tech-slider?activeTab=readme)

---


