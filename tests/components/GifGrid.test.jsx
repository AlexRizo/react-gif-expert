import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const champeon = 'AUrelion Sol';
    
    test('should de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={ champeon }/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(champeon));
    });

    test('Debe de mostrar items cuando se cargan las imágenes mediante useGetGifs', () => {
        const gifs = [
            {
                id: '001',
                title: 'Aurelion Sol',
                url: 'https://leagueoflegends/champions/aurelion-sol.jpg'
            },
            {
                id: '002',
                title: 'Darius',
                url: 'https://leagueoflegends/champions/darius.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={ champeon }/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });
})