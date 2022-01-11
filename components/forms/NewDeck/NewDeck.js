import React, { useState } from "react";

import FormAddDeck from "./FormAddDeck";

function NewDeck(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveDeckDataHandler(enteredDeckData) {
    props.onAddDeck(enteredDeckData);
    setIsEditing(false);
  };

  function startEditingHandler() {
      setIsEditing(true);
  }

  function stopEditingHandler() {
      setIsEditing(false);
  }

  return (
    <div>
      {!isEditing && <button onClick={startEditingHandler}>Deck hinzufügen</button>}
      {isEditing && <FormAddDeck items={props.items} onSaveDeckData={saveDeckDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewDeck;
