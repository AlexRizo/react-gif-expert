import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('{- Pruebas en <AddCategory /> -}', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Aurelion Sol' } });
        
        expect(input.value).toBe('Aurelion Sol')
    });

    test('Debería de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Aurelion Sol';
        const onNewCategory = jest.fn();

        // TODO: ????
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('No debe de llamar el onNewCategory si el input está vacío', () => {
        // const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        // const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
}); 