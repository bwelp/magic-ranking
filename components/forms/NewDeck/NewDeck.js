import React from "react";

import './NewDeck.css';
import FormAddDeck from "./FormAddDeck";

function NewDeck(props) {
  // const [isEditing, setIsEditing] = useState(false);

  function saveDeckDataHandler(enteredDeckData) {
    props.onAddDeck(enteredDeckData);
    props.onStopAdding(false);
  };

  // function startEditingHandler() {
  //     setIsEditing(true);
  // }

  function stopEditingHandler() {
      props.onStopAdding(false);
  }

  return (
    <div className="new_deck">
      {/* {!isEditing && <button id="button_open_deck_form" onClick={startEditingHandler}>Deck hinzufügen</button>} */}
      {props.addDeckActive && <FormAddDeck items={props.items} onSaveDeckData={saveDeckDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewDeck;
