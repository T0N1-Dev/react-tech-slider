import React from 'react';
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
export declare const Slider: React.FC<SliderProps>;
