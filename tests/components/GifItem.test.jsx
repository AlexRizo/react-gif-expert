import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => { 
    const title = 'Aurelion Sol',
          url = 'https://leagueoflegends.com/aurelion-sol.jpg';
    
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imágen con el URL y el ALT especificado', () => {
        render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('Debe de mostrar el título en el coimponente', () => {
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});