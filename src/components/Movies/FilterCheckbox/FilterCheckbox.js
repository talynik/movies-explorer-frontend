import React from 'react';

function FilterCheckbox({checked, handleChecked}) {
  
  return (
    <section className="filterCheckbox">
      <input id="s1" type="checkbox" className="filterCheckbox__switch" checked={checked} onClick={handleChecked}></input>
      <label for="s1">Короткометражки</label>
    </section>
  );
}
export default FilterCheckbox;