# 📛 react-tech-slider

Un componente React reutilizable para mostrar una lista deslizante de iconos con animación continua. Ideal para portafolios, agencias, landings, etc.

## 🚀 Instalación

```bash
npm install react-tech-slider
```

## ✅ Uso básico

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

## ✨ Props disponibles

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `technologies` | `Technology[]` | ✅ | Array de tecnologías a mostrar |
| `borderColor` | `string` | ❌ | Color del borde superior e inferior (#hex) |
| `backgroundColor` | `string` | ❌ | Color de fondo de la lista (#hex) |
| `borderWidth` | `number` | ❌ | Ancho del borde (px) |
| `iconWidth` | `number` | ❌ | Ancho del icono (rem) |
| `iconHeight` | `number` | ❌ | Alto del icono (rem) |

### Interface

```typescript
interface Technology {
  id: number;
  name: string;
  img: string | JSX.Element;
}
```

## 🎨 Personalización

- Soporta imágenes SVG como URLs o componentes JSX
- Ancho, color y cantidad de ítems son dinámicos vía props
- Estilos adaptables con media queries y variables CSS

## 🌐 Demo en vivo

👉 [Ver demo en StackBlitz](https://stackblitz.com)

## 🧪 Ejemplo totalmente personalizado

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

## 📦 Build y publicación

```bash
npm run build
npm publish
```

## 🤝 Contribuciones

PRs y sugerencias son bienvenidas en GitHub

![npm](https://img.shields.io/npm/v/react-tech-slider)


