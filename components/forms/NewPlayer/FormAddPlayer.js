import React, { useState } from "react";

import "./FormAddPlayer.css";
import useFormInput from "../../../hooks/use-form-input";

const FormAddPlayer = (props) => {
  const {
    value: enteredPlayer,
    isValid: playerIsValid,
    hasError: playerHasError,
    valueInputClasses: playerInputClasses,
    valueChangeHandler: playerChangeHandler,
    inputBlurHandler: playerBlurHandler,
    resetInput: resetPlayer,
  } = useFormInput("text", (value) => value.trim() !== "");

  // const [enteredPlayer, setEnteredPlayer] = useState("");

  // const playerChangeHandler = (event) => {
  //   setEnteredPlayer(event.target.value);
  // };

  const comparePlayers = () => {
    for (let i = 0; i < props.players.length; i++) {
      if (enteredPlayer === props.players[i].player) {
        return false;
      }
    }
    return true;
  };

  const [playerIsUnique, setPlayerIsUnique] = useState(true);

  let formIsValid = false;

  if (playerIsValid) {
    formIsValid = true;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formIsValid === false) {
      return;
    }

    let uniquePlayerName = comparePlayers();

    if (!uniquePlayerName) {
      setPlayerIsUnique(false);
      return;
    } else {
      setPlayerIsUnique(true);
    }

    const playerData = {
      player: enteredPlayer,
    };

    props.onSavePlayerData(playerData);
    resetPlayer();
  }

  return (
    <div className="form_add_player">
      <form type="submit" id="add-player" onSubmit={submitHandler}>
        <div className="add-player-container">
          <div id="add_player__name" className={playerInputClasses}>
            <label htmlFor="player">Name des Spielers: </label>
            <input
              type="text"
              value={enteredPlayer}
              onChange={playerChangeHandler}
              onBlur={playerBlurHandler}
              id="player"
              name="player"
              form="add-player"
            />
          </div>
          {playerHasError && (
            <p className="error-text">Bitte einen gültigen Namen eingeben!</p>
          )}
          {!playerIsUnique && (
            <p className="error-text">Spieler existiert bereits!</p>
          )}
          <div id="add_player__buttons">
            <button type="submit" form="add-player" disabled={!formIsValid}>
              hinzufügen
            </button>
            <button type="button" onClick={props.onCancel}>
              abbrechen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAddPlayer;
