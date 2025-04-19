import './slider.css';
import React from 'react';
export interface Brand {
    id: number;
    name: string;
    img: string;
    width?: number;
    height?: number;
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
export declare const Slider: React.FC<SliderProps>;
