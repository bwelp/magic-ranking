import React, { useState, useRef } from "react";

import "./FormAddResult.css";
import useFormInput from "../../../hooks/use-form-input";
import FormAddPlayerOptions from "../NewDeck/FormAddPlayerOptions";
import FormAddDeckOptions from "../NewResult/FormAddDeckOptions";

const FormAddResult = (props) => {
  const [numberOfPlayersArray, setNumberOfPlayersArray] = useState([]);
  const [noFirstPlace, setNoFirstPlace] = useState(false);
  const [placesArrayIsNotSorted, setPlacesArrayIsNotSorted] = useState(false);
  const [playersArrayContainsDuplicates, setPlayersArrayContainsDuplicates] = useState(false);
  const [decksArrayContainsDuplicates, setDecksArrayContainsDuplicates] = useState(false);
  const [placesArrayContainsInvalidValue, setPlacesArrayContainsInvalidValue] = useState(false);
  const [playersArrayContainsInvalidValue, setPlayersArrayContainsInvalidValue] = useState(false);
  const [decksArrayContainsInvalidValue, setDecksArrayContainsInvalidValue] = useState(false);
  const [deckEvalsArrayContainsInvalidValue, setDeckEvalsArrayContainsInvalidValue] = useState(false);
  const [deckEvalCheck, setDeckEvalCheck] = useState(false);

  const placeInputRef = useRef([]);
  const playerInputRef = useRef([]);
  const deckInputRef = useRef([]);
  const deckEvalInputRef = useRef([]);
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
  for (let i = 0; i < props.players.length -1; i++) {
    chooseNumberOfPlayersArray[i] = i + 2;
  }

  const deckEvalCheckChangeHandler = (event) => {
    if(event.target.checked === true) {
      setDeckEvalCheck(true);
    }
    else {
      setDeckEvalCheck(false);
    }
  }

  const {
    value: gameRound,
    isValid: gameRoundIsValid,
    hasError: gameRoundHasError,
    valueInputClasses: gameRoundInputClasses,
    valueChangeHandler: gameRoundChangeHandler,
    inputBlurHandler: gameRoundBlurHandler,
    resetInput: resetGameRound,
  } = useFormInput("text", (value) => parseInt(value) >= 1);

  const {
    value: gameLocation,
    isValid: gameLocationIsValid,
    hasError: gameLocationHasError,
    valueInputClasses: gameLocationInputClasses,
    valueChangeHandler: gameLocationChangeHandler,
    inputBlurHandler: gameLocationBlurHandler,
    resetInput: resetGameLocation,
  } = useFormInput("text", (value) => value.trim() !== "");

  const {
    value: gameDate,
    isValid: gameDateIsValid,
    hasError: gameDateHasError,
    valueInputClasses: gameDateInputClasses,
    valueChangeHandler: gameDateChangeHandler,
    inputBlurHandler: gameDateBlurHandler,
    resetInput: resetGameDate,
  } = useFormInput("text", (value) => value !== "");

  const arrayContainsDuplicates = arr => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }

  const arrayIsSorted = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] <= arr[i + 1]) {
        return true;
      }
    }
    return false;
  }

  const arrayContainsOne = arr => {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === "1") {
        return true;
      }
    }
    return false;
  }

  let formIsValid = false;
  
  if (gameLocationIsValid && gameDateIsValid && gameRoundIsValid && numberOfPlayersArray.length >= 2) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid === false) {
      return;
    }

    let enteredPlaces = [];
    placeInputRef.current.forEach((place, index) => {
      if (
        index >=
        placeInputRef.current.length - numberOfPlayersArray.length
      ) {
        enteredPlaces.push(place.value);
      }
    });

    let enteredPlayers = [];
    playerInputRef.current.forEach((player, index) => {
      if (
        index >=
        playerInputRef.current.length - numberOfPlayersArray.length
      ) {
        enteredPlayers.push(player.value);
      }
    });

    let enteredDecks = [];
    deckInputRef.current.forEach((deck, index) => {
      if (
        index >=
        deckInputRef.current.length - numberOfPlayersArray.length
      ) {
        enteredDecks.push(deck.value);
      }
    });

    let enteredDeckEvals = [];
    if (deckEvalCheck === false) {
      deckEvalInputRef.current.forEach((deckEval, index) => {
        if (
          index >=
          deckEvalInputRef.current.length - numberOfPlayersArray.length
        ) {
          enteredDeckEvals.push(deckEval.value);
        }
      });
    } else {
      for(let i = 0; i < numberOfPlayersArray.length; i++) {
        enteredDeckEvals.push(0);
      }
    }

    let placesArrContainsInvalidValue = enteredPlaces.includes("");
    let playersArrContainsInvalidValue = enteredPlayers.includes("");
    let decksArrContainsInvalidValue = enteredDecks.includes("");
    let deckEvalsArrContainsInvalidValue = enteredDeckEvals.includes("");

    placesArrContainsInvalidValue
    ? setPlacesArrayContainsInvalidValue(true)
    : setPlacesArrayContainsInvalidValue(false);
    playersArrContainsInvalidValue
    ? setPlayersArrayContainsInvalidValue(true)
    : setPlayersArrayContainsInvalidValue(false);
    decksArrContainsInvalidValue
    ? setDecksArrayContainsInvalidValue(true)
    : setDecksArrayContainsInvalidValue(false);
    deckEvalsArrContainsInvalidValue
    ? setDeckEvalsArrayContainsInvalidValue(true)
    : setDeckEvalsArrayContainsInvalidValue(false);

    let noFirstPlaceInArr = !arrayContainsOne(enteredPlaces);
    let placesArrIsNotSorted = !arrayIsSorted(enteredPlaces);
    let playersArrContainsDuplicates = arrayContainsDuplicates(enteredPlayers);
    let decksArrContainsDuplicates = arrayContainsDuplicates(enteredDecks);

    noFirstPlaceInArr
    ? setNoFirstPlace(true)
    : setNoFirstPlace(false);
    placesArrIsNotSorted
    ? setPlacesArrayIsNotSorted(true)
    : setPlacesArrayIsNotSorted(false);
    playersArrContainsDuplicates
      ? setPlayersArrayContainsDuplicates(true)
      : setPlayersArrayContainsDuplicates(false);
    decksArrContainsDuplicates
      ? setDecksArrayContainsDuplicates(true)
      : setDecksArrayContainsDuplicates(false);

    if (noFirstPlaceInArr || placesArrIsNotSorted || playersArrContainsDuplicates || decksArrContainsDuplicates || placesArrContainsInvalidValue || playersArrContainsInvalidValue || decksArrContainsInvalidValue || deckEvalsArrContainsInvalidValue) {
      return;
    }

    // const enteredGameRound = gameRoundInputRef.current.value;
    // const enteredGameLocation = gameLocationInputRef.current.value;
    // const enteredGameDate = gameDateInputRef.current.value;

    let result = {
      places: enteredPlaces,
      players: enteredPlayers,
      decks: enteredDecks,
      deckEvals: enteredDeckEvals,
      deckEvalCheck: deckEvalCheck,
      gameRound: gameRound,
      gameLocation: gameLocation,
      gameDate: gameDate,
      gameId: gameDate + gameRound,
    };

    props.onSaveResultData(result);

    placeInputRef.current = [];
    playerInputRef.current = [];
    deckInputRef.current = [];
    deckEvalInputRef.current = [];
    // gameRoundInputRef.current.value = '';
    // gameLocationInputRef.current.value = '';
    // gameDateInputRef.current.value = '';

    setDeckEvalCheck(false);
    resetGameRound();
    resetGameLocation();
    resetGameDate();
  };

  // <label htmlFor={`player${number}`}>{`${number}. Platz `}</label>

  return (
    <div className="form_add_result">
      <div id="add_result__header">Ergebnis hinzufügen</div>
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
                <select
                  id={`place${number}`}
                  name={`place${number}`}
                  form="add-result"
                  ref={(element) => placeInputRef.current.push(element)}
                >
                  <option value="">Platz auswählen</option>
                  {numberOfPlayersArray.map((number) => (
                    <option value={number} key={number}>
                      {number}
                    </option>
                  ))}
                </select>

                
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
                  ref={(element) => deckInputRef.current.push(element)}
                >
                  <option value="">Deck auswählen</option>
                  {props.decks.map((deck) => (
                    <FormAddDeckOptions
                      key={deck.deckname}
                      deckname={deck.deckname}
                    />
                  ))}
                </select>
                {!deckEvalCheck && (
                  <input
                    type="number"
                    id={`deckEval${number}`}
                    name={`deckEval${number}`}
                    form="add-result"
                    className="add_result__deck_eval"
                    min="1"
                    max="10"
                    step="0.1"
                    placeholder="Bewertung"
                    ref={(element) => deckEvalInputRef.current.push(element)}
                  />
                )}
              </div>
            ))}
           {noFirstPlace && (
            <p className="error-text">
              Platz 1 muss vergeben sein!
            </p>
          )}
          {placesArrayIsNotSorted && (
            <p className="error-text">
              Die Platzierungen müssen in der richtigen Reihenfolge eingegeben werden!
            </p>
          )}
            {placesArrayContainsInvalidValue && (
            <p className="error-text">
              Bitte für alle Spieler eine gültige Platzierung angeben!
            </p>
          )}
          {playersArrayContainsInvalidValue && (
            <p className="error-text">
              Bitte für alle Spieler einen gültigen Namen angeben!
            </p>
          )}
          {decksArrayContainsInvalidValue && (
            <p className="error-text">
              Bitte für alle Spieler ein gültiges Deck angeben!
            </p>
          )}
          {deckEvalsArrayContainsInvalidValue && (
            <p className="error-text">
              Bitte für alle Decks eine gültige Bewertung zwischen 1 und 10
              angeben!
            </p>
          )}
          {playersArrayContainsDuplicates && (
            <p className="error-text">
              Doppelte Spielernamen sind nicht zulässig!
            </p>
          )}
          {decksArrayContainsDuplicates && (
            <p className="error-text">
              Doppelte Decknamen sind nicht zulässig!
            </p>
          )}
        </div>
        {numberOfPlayersArray.length > 0 && (
          <div id="add_result__deck_eval_check">
            <input
              type="checkbox"
              id="deckEvalCheck"
              name="deckEvalCheck"
              form="add-result"
              className="add_result__deck_eval_check"
              onChange={deckEvalCheckChangeHandler}
              value={deckEvalCheck}
            />
            <label htmlFor="deckEvalCheck">keine Bewertung</label>
          </div>
        )}
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
            <p className="error-text">
              Bitte eine gültige Spielrunde auswählen!
            </p>
          )}
        </div>
        <div
          id="add_result__game_location"
          className={gameLocationInputClasses}
        >
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
            <p className="error-text">
              Bitte einen gültigen Spielort eingeben!
            </p>
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
