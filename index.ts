import './src/slider.css';
export { Slider } from './src/Slider';

if (typeof document !== 'undefined') {
    const existing = document.querySelector('link[href*="react-tech-slider/dist/index.css"]');
    if (!existing) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/react-tech-slider@latest/dist/index.css'; // 🔁 usa unpkg o CDN
      document.head.appendChild(link);
    }
  }
  