import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');


    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const valueTrim = inputValue.trim();

        if (valueTrim.length <= 1) return;

        // setCategories((categories) => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(valueTrim)
        
        
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
            <button>Agregar</button>
        </form>
    )
}
