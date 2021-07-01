import React from 'react';

function SearchForm({onLoading}) {

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onLoading();
  }

  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <input  autoComplete="off" id="search" name="search" className="searchForm__input" placeholder="Фильм" required/>
        <button className="searchForm__button" type="submit" aria-label="Найти" onClick={handleSubmit}>Найти</button>
      </form>
    </section>
  );
}
export default SearchForm;