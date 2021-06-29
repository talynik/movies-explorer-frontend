import React from 'react';
import Preloader from '../Preloader/Preloader'

function SearchForm({onLoading, isLoading, ofLoading}) {

  // закрытие на ESC
  React.useEffect(() => {
    if (!isLoading) {
      document.addEventListener("keydown", ofLoading);
    } else {
      document.removeEventListener("keydown", ofLoading);
    }
  }, [ofLoading, isLoading]);

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
      {isLoading && <Preloader/>}
    </section>
  );
}
export default SearchForm;