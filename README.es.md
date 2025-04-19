# 📛 react-tech-slider

Un componente **slider de React** reutilizable y personalizable para mostrar logotipos de marcas o stacks tecnológicos con una animación infinita suave.  
Perfecto para portafolios, páginas de agencias, sitios SaaS y más.

---

## 🚀 Instalación

```bash  
npm install react-tech-slider
```
---

## 🌐 Demo en Vivo

👉 [Ver Demo](https://react-tech-slider-demo-git-main-t0n1-devs-projects.vercel.app/)

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


| Propiedades          | Tipo          | Requerido | Predeterminado | Descripción |
|----------------------|---------------|------------|---------------|-------------|
| `brandsList`         | `Brand[]`     | ✅        | —              | Arreglo de marcas para renderizar |
| `borderColor`        | `string`      | ❌        | `#7c05d8`      | Color del borde superior/inferior (#hex o color CSS) |
| `backgroundColor`    | `string`      | ❌        | `#00000033`    | Color de fondo (#hex, rgba, etc.) |
| `borderWidth`        | `number`      | ❌        | `1`            | Grosor del borde en píxeles |
| `iconWidth`          | `number`      | ❌        | —              | Ancho de los íconos (en rem) — se aplica globalmente si no se define un ancho individual |
| `isPlay`             | `boolean`     | ❌        | `true`         | Si la animación está en reproducción (true) o pausada (false) |
| `pauseOnHoverActive` | `boolean`     | ❌        | `false`        | Si es true, la animación se pausa al pasar el cursor por encima |
| `durationMs`         | `number`      | ❌        | `30000`        | Tiempo en milisegundos para un ciclo completo de animación |


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

- Animación infinita suave mediante CSS puro

- Flexibilidad de tamaño global o por marca

- Desvanecimiento en los bordes usando mask-image para un acabado visual pulido

- Opción de pausa al pasar el cursor por encima

- Diseño totalmente responsive

---

## 🧪 Ejemplo Totalmente Personalizado

```tsx  
<Slider 
  brandsList={brands}
  borderWidth={2}
  borderColor="#0cf"
  backgroundColor="#eef"
  iconWidth={6}
  isPlay={true}
  pauseOnHoverActive={true}
  durationMs={20000}
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

```bash  
npm run build  
npm publish
```
---

## 🤝 Contribuciones

Pull requests y sugerencias son bienvenidas en  
👉 [https://github.com/T0N1-Dev/react-tech-slider](https://github.com/T0N1-Dev/react-tech-slider)

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/T0N1-Dev/react-tech-slider)  
[![npm](https://img.shields.io/npm/v/react-tech-slider)](https://www.npmjs.com/package/react-tech-slider?activeTab=readme)
