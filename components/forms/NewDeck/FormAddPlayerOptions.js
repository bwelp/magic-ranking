import React from "react";

function FormAddPlayerOptions(props) {
  return(
      <option value={props.player}>{props.player}</option>
  )
}

export default FormAddPlayerOptions;