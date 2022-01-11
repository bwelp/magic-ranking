import React, { useState } from "react";

import FormAddResult from "./FormAddResult";

function NewResult(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveResultDataHandler(enteredResultData) {
    props.onAddDeck(enteredResultData);
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
      {!isEditing && <button onClick={startEditingHandler}>Ergebnis hinzufügen</button>}
      {isEditing && <FormAddResult items={props.items} onSaveResultData={saveResultDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewResult;
