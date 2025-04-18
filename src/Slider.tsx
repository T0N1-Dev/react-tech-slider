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
}

export const Slider: React.FC<SliderProps> = ({ 
  brandsList, 
  borderWidth = 1, 
  borderColor = '#7c05d8',
  backgroundColor = '#00000033',
  iconWidth
}) => {
  return (
    <div 
      className="wrapper"
      style={
        {
          '--amount-brands': brandsList.length,
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
