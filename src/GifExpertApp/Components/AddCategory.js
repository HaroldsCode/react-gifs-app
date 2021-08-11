import { useState } from "react";
import PropTypes from 'prop-types';
export const AddCategory = ({setNumbers}) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 0){
            setNumbers(inputValue);
            // setNumbers(n => [inputValue, ...n]);
            setInputValue('');
        }
    }

    return (
        <form className="from" onSubmit={handleSubmit}>
            <input className="from__input" type="text" value={inputValue} onChange={handleChange} placeholder="Escribe algo"/>
        </form>
    )
}

AddCategory.propTypes = {
    setNumbers: PropTypes.func.isRequired
}