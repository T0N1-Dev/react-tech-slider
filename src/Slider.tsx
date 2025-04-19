import './slider.css';
import React from 'react';

export interface Brand {
  id: number;
  name: string;
  img: string;
  width?: number; // rem
  height?: number; // rem
  style?: React.CSSProperties; 
  className?: string;
}

export interface SliderProps {
  brandsList: Brand[];
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  iconWidth?: number;
  isPlay?: boolean;
  pauseOnHoverActive?: boolean;
  durationMs?: number;
}

export const Slider: React.FC<SliderProps> = ({ 
  brandsList, 
  borderWidth = 1, 
  borderColor = '#7c05d8',
  backgroundColor = '#00000033',
  iconWidth,
  isPlay = true,
  pauseOnHoverActive = false,
  durationMs = 30000
}) => {
  return (
    <div 
      className={`wrapper ${ !isPlay ? 'wrapper-paused' : '' } ${ pauseOnHoverActive ? 'wrapper-paused-hover' : '' }`}
      style={
        {
          '--amount-brands': brandsList.length,
          '--transition-slider-duration': `${durationMs / 1000}s`,
          borderTop: `${borderWidth}px solid ${borderColor}`,
          borderBottom: `${borderWidth}px solid ${borderColor}`,
          backgroundColor: `${backgroundColor}`
        } as React.CSSProperties
      }
    >
      {brandsList.map(({ id, name, img, width, height, style, className }, index) => (
        <div
          key={id}
          className={ `item item${id}` }
          style={ { '--item': index + 1 } as React.CSSProperties }
        >
          <img
            src={img}
            alt={`${name}-icon`}
            className={`brand-slider ${className ?? ''}`}
            style={{
              ...(width || iconWidth
                ? { width: `${width ?? iconWidth}rem` }
                : {}),
              ...(height ? { height: `${height}rem` } : {}),
              ...style
            }}            
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
