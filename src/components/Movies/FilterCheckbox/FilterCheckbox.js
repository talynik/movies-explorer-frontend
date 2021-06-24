import React from 'react';

function FilterCheckbox({handleSubmit, isLoading}) {

  return (
    <div>
      <input id="s1" type="checkbox" class="switch"></input>
      <label for="s1">Switch</label>
    </div>
  );
}
export default FilterCheckbox;