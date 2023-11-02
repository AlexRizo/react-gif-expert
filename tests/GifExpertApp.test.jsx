import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    test('Debería de retornar las categorías + la nueva categoría', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Yasuo' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Darius' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Renekton' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(4);
    });

    test('No debería de agregar una categoria si ya existe', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'League of Legends' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
    });    
});