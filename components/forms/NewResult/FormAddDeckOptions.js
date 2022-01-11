import React from "react";

function FormAddDeckOptions(props) {
  return(
      <option value={props.deckname}>{props.deckname}</option>
  )
}

export default FormAddDeckOptions;