import React from 'react';

function FilterCheckbox({handleSubmit, isLoading}) {

  return (
    <section className="filterCheckbox">
      <input id="s1" type="checkbox" className="filterCheckbox__switch"></input>
      <label for="s1">Короткометражки</label>
    </section>
  );
}
export default FilterCheckbox;