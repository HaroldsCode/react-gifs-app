import { useState, useEffect } from "react";
import { IoSearch } from 'react-icons/io5';
import PropTypes from "prop-types";

export const AddCategory = ({ setQuery, query }) => {

  const [inputValue, setInputValue] = useState(query);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isNotEmpty, setIsNotEmpty] = useState( !!query ? true : false );

  useEffect(() => {
    setInputValue(query);
    setIsNotEmpty( !!query ? true : false );
  }, [ query ])

  const handleChange = (e) => {
    let data = e.target.value.trim();
    setInputValue(data);
    if(data.length > 0) {
      setIsNotEmpty( true );
    }else{
      setIsNotEmpty( false );
    }
  };

  const emptyInput = () => {
    setInputValue('');
    setIsInvalid(false);
    setIsNotEmpty( false );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setQuery(inputValue.trim());
      localStorage.setItem("query", inputValue.trim());
      setIsInvalid(false);
      e.target.firstChild.firstChild.blur()
    } else {
      setIsInvalid(true);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input_group">
        <input
          className={!isInvalid ? "form__input" : "form__input invalid"}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Escribe algo"
        />
        {isNotEmpty  && <button type="button" onClick={ emptyInput }> X </button> }
      </div>
      <button type="submit" > <IoSearch /> </button>
    </form>
  );
};

AddCategory.propTypes = {
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
