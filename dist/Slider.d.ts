import './slider.css';
import React from 'react';
export interface Brand {
    id: number;
    name: string;
    img: string;
}
export interface SliderProps {
    brandsList: Brand[];
    borderWidth?: number;
    borderColor?: string;
    backgroundColor?: string;
    iconWidth?: number;
    iconHeight?: number;
}
export declare const Slider: React.FC<SliderProps>;
