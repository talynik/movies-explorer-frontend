import React from 'react';

function SearchForm({onLoading}) {

  const [searchMovie, setSearchMovie] = React.useState('');

  function handleChangeSearchMovie(evt) {
    setSearchMovie(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onLoading(searchMovie);
  }

  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <input  autoComplete="off" id="search" name="search" className="searchForm__input" placeholder="Фильм" required  value={searchMovie} onChange={handleChangeSearchMovie}/>
        <button className="searchForm__button" type="submit" aria-label="Найти" onClick={handleSubmit}>Найти</button>
      </form>
    </section>
  );
}
export default SearchForm;