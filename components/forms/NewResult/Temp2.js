import React, { useState, useRef } from "react";

import "./FormAddResult.css";
import useFormInput from "../../../hooks/use-form-input";
import FormAddPlayerOptions from "../NewDeck/FormAddPlayerOptions";
import FormAddDeckOptions from "../NewResult/FormAddDeckOptions";

const FormAddResult = (props) => {
  const [numberOfPlayersArray, setNumberOfPlayersArray] = useState([]);

  const playerInputRef = useRef([]);
  const deckInputRef = useRef([]);
  // const gameRoundInputRef = useRef();
  // const gameLocationInputRef = useRef();
  // const gameDateInputRef = useRef();

  

  const numberOfPlayersChangeHandler = (event) => {
    let numberOfPlayersArr = [];
    if (event.target.value > 0) {
      for (let i = 0; i < event.target.value; i++) {
        numberOfPlayersArr[i] = i + 1;
      }
    }
    setNumberOfPlayersArray(numberOfPlayersArr);
  };

  let chooseNumberOfPlayersArray = [];
  for (let i = 0; i < 10; i++) {
    chooseNumberOfPlayersArray[i] = i + 1;
  }

  // let playerArray = [];
  // let playerIsValidArray = [];
  // let playerHasErrorArray = [];
  // let playerInputClassesArray = [];
  // let playerChangeHandlerArray = [];
  // let playerBlurHandlerArray = [];
  // let resetPlayerArray = [];

  // let deckArray = [];
  // let deckIsValidArray = [];
  // let deckHasErrorArray = [];
  // let deckInputClassesArray = [];
  // let deckChangeHandlerArray = [];
  // let deckBlurHandlerArray = [];
  // let resetDeckArray = [];

  // for (let i = 0; i < numberOfPlayersArray.length; i++) {

  //   const {
  //     value: player,
  //     isValid: playerIsValid,
  //     hasError: playerHasError,
  //     valueInputClasses: playerInputClasses,
  //     valueChangeHandler: playerChangeHandler,
  //     inputBlurHandler: playerBlurHandler,
  //     resetInput: resetPlayer
  //   } = useFormInput("text", value => value !== "");
    
  //   playerArray.push(player);
  //   playerIsValidArray.push(playerIsValid);
  //   playerHasErrorArray.push(playerHasError);
  //   playerInputClassesArray.push(playerInputClasses);
  //   playerChangeHandlerArray.push(playerChangeHandler);
  //   playerBlurHandlerArray.push(playerBlurHandler);
  //   resetPlayerArray.push(resetPlayer);

  //   const {
  //     value: deck,
  //     isValid: deckIsValid,
  //     hasError: deckHasError,
  //     valueInputClasses: deckInputClasses,
  //     valueChangeHandler: deckChangeHandler,
  //     inputBlurHandler: deckBlurHandler,
  //     resetInput: resetDeck
  //   } = useFormInput("text", value => value !== "");
    
  //   deckArray.push(deck);
  //   deckIsValidArray.push(deckIsValid);
  //   deckHasErrorArray.push(deckHasError);
  //   deckInputClassesArray.push(deckInputClasses);
  //   deckChangeHandlerArray.push(deckChangeHandler);
  //   deckBlurHandlerArray.push(deckBlurHandler);
  //   resetDeckArray.push(resetDeck);
  // }

  const {
    value: gameRound,
    isValid: gameRoundIsValid,
    hasError: gameRoundHasError,
    valueInputClasses: gameRoundInputClasses,
    valueChangeHandler: gameRoundChangeHandler,
    inputBlurHandler: gameRoundBlurHandler,
    resetInput: resetGameRound
  } = useFormInput("text", value => parseInt(value) >= 1);

  const {
    value: gameLocation,
    isValid: gameLocationIsValid,
    hasError: gameLocationHasError,
    valueInputClasses: gameLocationInputClasses,
    valueChangeHandler: gameLocationChangeHandler,
    inputBlurHandler: gameLocationBlurHandler,
    resetInput: resetGameLocation
  } = useFormInput("text", value => value.trim() !== "");

  const {
    value: gameDate,
    isValid: gameDateIsValid,
    hasError: gameDateHasError,
    valueInputClasses: gameDateInputClasses,
    valueChangeHandler: gameDateChangeHandler,
    inputBlurHandler: gameDateBlurHandler,
    resetInput: resetGameDate
  } = useFormInput("text", value => value !== "");

  let formIsValid = false;

  if (gameLocationIsValid && gameDateIsValid && gameRoundIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid === false) {
      return; 
    }

    console.log(numberOfPlayersArray);
    console.log(playerInputRef);

    let enteredPlayers = [];
    playerInputRef.current.forEach((player) => {
      enteredPlayers.push(player.value);
    });

    let enteredDecks = [];
    deckInputRef.current.forEach((deck) => {
      enteredDecks.push(deck.value);
    });

    // const enteredGameRound = gameRoundInputRef.current.value;
    // const enteredGameLocation = gameLocationInputRef.current.value;
    // const enteredGameDate = gameDateInputRef.current.value;

    let result = {
      players: enteredPlayers,
      decks: enteredDecks,
      gameRound: gameRound,
      gameLocation: gameLocation,
      gameDate: gameDate,
      gameId: gameDate + gameRound,
    };

    props.onSaveResultData(result);

    playerInputRef.current = [];
    deckInputRef.current = [];
    // gameRoundInputRef.current.value = '';
    // gameLocationInputRef.current.value = '';
    // gameDateInputRef.current.value = '';

    // for (let i = 0; i < numberOfPlayersArray.length; i++) {
    //   resetPlayer[i]();
    //   resetDeck[i]();
    // }

    resetGameRound();
    resetGameLocation();
    resetGameDate();
  };

  return (
    <div className="form_add_result">
      <form type="submit" id="add-result" onSubmit={submitHandler}>
        <div id="add_result__number_of_players">
          <label htmlFor="number-of-players">Anzahl Mitspieler: </label>
          <select
            id="number-of-players"
            name="number-of-players"
            form="add-result"
            onChange={numberOfPlayersChangeHandler}
          >
            <option value="">Wähle die Anzahl</option>
            {chooseNumberOfPlayersArray.map((number) => (
              <option value={number} key={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div id="add_result__players_decks">
          {numberOfPlayersArray.length > 0 &&
            numberOfPlayersArray.map((number) => (
              <div key={number}>
                <label htmlFor={`player${number}`}>{`${number}. Platz `}</label>
                <select
                  id={`player${number}`}
                  name={`player${number}`}
                  form="add-result"
                  ref={(element) => playerInputRef.current.push(element)}
                >
                  <option value="">Spieler auswählen</option>
                  {props.players.map((player) => (
                    <FormAddPlayerOptions
                      key={player.player}
                      player={player.player}
                    />
                  ))}
                </select>
                <select
                  id={`deck${number}`}
                  name={`deck${number}`}
                  form="add-result"
                  ref={(element) => (deckInputRef.current.push(element))}
                >
                  <option value="">Deck auswählen</option>
                  {props.decks.map((deck) => (
                    <FormAddDeckOptions
                      key={deck.deckname}
                      deckname={deck.deckname}
                    />
                  ))}
                </select>
              </div>
            ))}
        </div>
        <div id="add_result__game_round" className={gameRoundInputClasses}>
          <label htmlFor="game-round">Spielrunde </label>
          <input
            type="number"
            id="game-round"
            name="game-round"
            form="add-result"
            onChange={gameRoundChangeHandler}
            onBlur={gameRoundBlurHandler}
            value={gameRound}
            // ref={gameRoundInputRef}
          />
          {gameRoundHasError && (
            <p className="error-text">Bitte eine gültige Spielrunde auswählen!</p>
          )}
        </div>
        <div id="add_result__game_location" className={gameLocationInputClasses}>
          <label htmlFor="game-location">Spielort </label>
          <input
            type="text"
            id="game-location"
            name="game-location"
            form="add-result"
            onChange={gameLocationChangeHandler}
            onBlur={gameLocationBlurHandler}
            value={gameLocation}
            // ref={gameLocationInputRef}
          />
          {gameLocationHasError && (
            <p className="error-text">Bitte einen gültigen Spielort eingeben!</p>
          )}
        </div>
        <div id="add_result__game_date" className={gameDateInputClasses}>
          <label htmlFor="game-date">Datum </label>
          <input
            type="date"
            id="game-date"
            name="game-date"
            form="add-result"
            onChange={gameDateChangeHandler}
            onBlur={gameDateBlurHandler}
            value={gameDate}
            // ref={gameDateInputRef}
          />
          {gameDateHasError && (
            <p className="error-text">Bitte ein gültiges Datum auswählen!</p>
          )}
        </div>
        <div>
          <button type="submit" form="add-result" disabled={!formIsValid}>
            hinzufügen
          </button>
          <button type="button" onClick={props.onCancel}>
            abbrechen
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddResult;
