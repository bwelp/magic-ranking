import React, { useState } from "react";

import './Results.css';

import NewResult from "../forms/NewResult/NewResult";
import TableResults from "../tables/Results/TableResults";

function Results(props) {
  const [addResultBoxActive, setAddResultBoxActive] = useState(false);

  const resultPlusButtonClickHandler = (event) => {
    setAddResultBoxActive(true);
  };

  const stopAddingResultHandler = () => {
    setAddResultBoxActive(false);
  };
 
  return (
    <div>
      <div className="headline_container">
        <div className="headline">Ergebnisse </div>
        {!addResultBoxActive && (
          <button
            type="button"
            id="result_plus_button"
            onClick={resultPlusButtonClickHandler}
          >
            +
          </button>
        )}
      </div>
      <div id="result_container">
        <TableResults results={props.results} onRemoveResult={props.onRemoveResult} />
        <NewResult  players={props.players} decks={props.decks} onAddResult={props.onAddResult} addResultActive={addResultBoxActive} onStopAdding={stopAddingResultHandler}/>
      </div>
    </div>
  );
}

export default Results;
