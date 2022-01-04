import React from 'react';

import './FormAddCommander.css';

const FormAddCommanderk = () => {
  return (
    <div>
      <form id="add-commander" action="#" method="get">
        <div id="add-commander-container">
          <label htmlFor="newcommander">Commander </label>
          <input
            type="text"
            id="newcommander"
            name="newcommander"
            form="add-commander"
          />
          <button type="submit" form="add-commander">
            hinzufügen
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddCommanderk;