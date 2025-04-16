import './slider.css';

export interface Technology {
  id: number;
  name: string;
  img: string;
}

export interface SliderProps {
  technologies: Technology[];
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export const Slider: React.FC<SliderProps> = ({ 
  technologies, 
  borderWidth = 1, 
  borderColor = '#7c05d8',
  backgroundColor = '#00000033',
  iconWidth = 5,
  iconHeight = 5
}) => {
  return (
    <div 
      className="wrapper"
      style={
        {
          '--amount-technologies': technologies.length,
          borderTop: `${borderWidth}px solid ${borderColor}`,
          borderBottom: `${borderWidth}px solid ${borderColor}`,
          backgroundColor: `${backgroundColor}`
        } as React.CSSProperties
      }
    >
      {technologies.map(({ id, name, img }, index) => (
        <div
          key={id}
          className={ `item item${id}` }
          style={ { '--item': index + 1 } as React.CSSProperties }
        >
          <img
            src={img}
            alt={`${name}-icon`}
            className="technology-slider"
            style={{width: `${iconWidth}rem`, height: `${iconHeight}rem`}}
            width="50"
            height="50"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
