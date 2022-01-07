import React from 'react';

import './FormAddResult.css';

const FormAddResult = () => {
  return (
    <form id="add-player" action="#" method="get">
      <div>
        <label htmlFor="player">Spieler: </label>
        <select id="player" name="player" form="add-player"></select>
        <button type="submit" form="add-player">
          hinzufügen
        </button>
      </div>
    </form>
  );
};

export default FormAddResult;