import React from "react";

import FormAddResult from "./FormAddResult";

const NewResult = (props) => {
 
  const saveResultDataHandler = (enteredResultData) => {
    props.onAddResult(enteredResultData);
    props.onStopAdding(false);
  };


  const stopEditingHandler = () => {
    props.onStopAdding(false);
  }

  return (
    <div className="new-result">

      {props.addResultActive  && <FormAddResult players={props.players} decks={props.decks} onSaveResultData={saveResultDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewResult;
