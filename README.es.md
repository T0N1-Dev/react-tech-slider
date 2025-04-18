# 📛 react-tech-slider

Un componente **slider de React** reutilizable y personalizable para mostrar logotipos de marcas o stacks tecnológicos con una animación infinita suave.  
Perfecto para portafolios, páginas de agencias, sitios SaaS y más.

---

## 🚀 Instalación

bash  
npm install react-tech-slider

---

## 🌐 Demo en Vivo

👉 [Ver Demo](https://stackblitz.com)

---

## ✅ Uso Básico

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

---

## ✨ Props Disponibles

| Propiedad        | Tipo      | Requerido | Descripción                                              |
|------------------|-----------|-----------|----------------------------------------------------------|
| brandsList       | Brand[]   | ✅         | Arreglo de marcas a renderizar                           |
| borderColor      | string    | ❌         | Color del borde superior/inferior (#hex o color CSS)     |
| backgroundColor  | string    | ❌         | Color de fondo (#hex, rgba, etc.)                        |
| borderWidth      | number    | ❌         | Grosor del borde en píxeles                              |
| iconWidth        | number    | ❌         | Ancho global de los íconos (en rem), si no se define uno por ítem |

### Interfaz Brand

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
---

## 🎨 Personalización

- Animación de scroll infinita con keyframes en CSS

- Totalmente responsivo con `clamp()` y media queries

- Fallback inteligente para el tamaño de íconos global o por ítem

- Estilos en línea opcionales a través de la prop `style`

- Pausa automática de la animación al hacer hover

- Gradiente en los bordes para un corte visual más suave

---

## 🧪 Ejemplo Totalmente Personalizado

```tsx  
<Slider 
  brandsList={brands}
  borderWidth={2}
  borderColor="#0cf"
  backgroundColor="#eef"
  iconWidth={7}
/>
```
- También puedes definir tamaños, clases y estilos por ítem:

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

---

## 📦 Compilar y Publicar

bash  
npm run build  
npm publish

---

## 🤝 Contribuciones

Pull requests y sugerencias son bienvenidas en  
👉 [https://github.com/T0N1-Dev/react-tech-slider](https://github.com/T0N1-Dev/react-tech-slider)

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/T0N1-Dev/react-tech-slider)  
[![npm](https://img.shields.io/npm/v/react-tech-slider)](https://www.npmjs.com/package/react-tech-slider?activeTab=readme)
