import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState();

    const onInputChange = ({ target }) => {
        return setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                name="buscador"
                id="buscador"
                placeholder="Buscar Gifs"
                onChange={ onInputChange }
            />
        </form>
    )
}
 