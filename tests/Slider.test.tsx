import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Slider } from "../src/Slider";

describe('Slider tests', () => {
    
    const brands = [
        { id: 1, name: 'React', img: 'react.png' },
        { id: 2, name: 'Node.js', img: 'node.png' }
    ];

    test('match snapshot', () => {
        const { container } = render(< Slider brandsList={brands} />);
        expect(container).toMatchSnapshot();
    });

    test('renders all brands', () => { 
        const { getAllByRole } = render(<Slider brandsList={brands} />);
        const images = getAllByRole('img');
        expect(images).toHaveLength(brands.length);
     });

    test('applies custom styles', () => { 
        const name = 'React';
        const { container } = render(
            <Slider 
                brandsList={[{ id: 1, name: `${name}`, img: 'react.png' }]}
                borderColor="black"
                borderWidth={3}
                backgroundColor = 'red'
                iconWidth = {10}
                iconHeight = {10}
            />
        );

        const wrapper = container.querySelector('.wrapper') as HTMLElement;
        const image = screen.getByAltText(`${name}-icon`);
        
        expect(wrapper.style.borderTop).toBe('3px solid black');
        expect(wrapper.style.borderBottom).toBe('3px solid black');
        expect(wrapper.style.backgroundColor).toBe('red');
        expect(image.style.width).toBe('10rem');
        expect(image.style.height).toBe('10rem');
    });
});
