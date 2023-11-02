import PropTypes from "prop-types";
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        return setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;
        
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) } aria-label="form">
            <input 
                type="text"
                name="buscador"
                id="buscador"
                placeholder="Buscar Gifs"
                onChange={ onInputChange }
                value={ inputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};