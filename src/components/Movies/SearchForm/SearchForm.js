import React from 'react';

function SearchForm({handleSubmit, isLoading}) {

  return (
    <section className="searchForm">
      <form className="searchForm__form">
      <input  autoComplete="off" id="search" name="search" className="searchForm__input" placeholder="Фильм"/>
      <button className="searchForm__button" type="submit" aria-label="Найти" onClick={handleSubmit}>{isLoading ? "Поиск..." : "Найти"}</button>
      </form>
    </section>
  );
}
export default SearchForm;