import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';

function Movies() {

  return (
    <section className="movies">
      <SearchForm/>
    </section>
  );
}

export default withRouter(Movies);