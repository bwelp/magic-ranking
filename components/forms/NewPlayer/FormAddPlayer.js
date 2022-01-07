import React, { useState } from "react";

import "./FormAddPlayer.css";

const FormAddPlayer = (props) => {
  const [enteredPlayer, setEnteredPlayer] = useState("");

  const playerChangeHandler = (event) => {
    setEnteredPlayer(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const playerData = {
      player: enteredPlayer,
    };

    props.onSavePlayerData(playerData);
    setEnteredPlayer("");
  };

  return (
    <form id="add-player" onSubmit={submitHandler}>
      <div className="add-player-container">
        <div className="addPlayer-input">
          <label htmlFor="player">Name des Spielers: </label>
          <input
            type="text"
            value={enteredPlayer}
            onChange={playerChangeHandler}
            id="player"
            name="player"
            form="add-player"
          />
        </div>
        <div className="add-player-action">
          <button type="button" onClick={props.onCancel}>
            abbrechen
          </button>
          <button type="submit" form="add-player">
            hinzufügen
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormAddPlayer;
