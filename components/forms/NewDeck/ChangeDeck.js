import React from "react";

import './NewDeck.css';
import FormChangeDeck from "./FormChangeDeck";

function ChangeDeck(props) {
  
  function saveDeckDataHandler(enteredDeckData) {
    props.onChangeDeck(enteredDeckData);
    props.onStopChanging(false);
  };

  function stopEditingHandler() {
      props.onStopChanging(false);
  }

  return (
    <div className="new_deck">
      {props.changeDeckActive && <FormChangeDeck players={props.players} decks={props.decks} onSaveDeckData={saveDeckDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default ChangeDeck;
