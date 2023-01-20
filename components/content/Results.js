import React, { useState } from "react";

import './Results.css';

import NewResult from "../forms/NewResult/NewResult";
import TableResults from "../tables/Results/TableResults";

function Results(props) {

  const [addResultBoxActive, setAddResultBoxActive] = useState(false);
  //const [changeResultBoxActive, setChangeResultBoxActive] = useState(false);
  //const [resultToChange, setResultToChange] = useState({});

  const resultPlusButtonClickHandler = (event) => {
    setAddResultBoxActive(true);
    //setChangeResultBoxActive(false);
  };

  const stopAddingResultHandler = () => {
    setAddResultBoxActive(false);
  };

  const changeResultClickHandler = (itemName) => {
    setAddResultBoxActive(false);
    //setChangeResultBoxActive(true);
  }
  //   let index = 
  //   setItems((prevItems) => {
  //     let index = -1;
  //     for (let i = 0; i < prevItems.length; i++) {
  //       if (prevItems[i][itemIdentifier] === itemName) {
  //         index = i;
  //         break;
  //       }
  //     }
  //     if (index !== -1) {
  //       prevItems.splice(index, 1);
  //     }
  //     return [...prevItems];
  //   });
  //   setResultToChange(itemName);
  // }

  // const stopChangingResultHandler = () => {
  //   setChangeResultBoxActive(false);
  // }
 
   //<ChangeResult players={props.players} decks={props.decks} onChangeResult={props.changeResultHandler} changeResultActive={changeResultBoxActive} onStopChanging={stopChangingResultHandler}/>
 
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
        <TableResults results={props.results} onRemoveResult={props.onRemoveResult} onChangeResult={changeResultClickHandler}/>
        <NewResult  players={props.players} decks={props.decks} onAddResult={props.onAddResult} addResultActive={addResultBoxActive} onStopAdding={stopAddingResultHandler}/>
      </div>
    </div>
  );
}

export default Results;
