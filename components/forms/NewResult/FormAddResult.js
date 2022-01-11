import React, { useState, useRef } from "react";

import "./FormAddResult.css";
import FormAddPlayerOptions from "../NewDeck/FormAddPlayerOptions";
import FormAddDeckOptions from "../NewResult/FormAddDeckOptions";

const FormAddResult = (props) => {
  const [numberOfPlayersArray, setNumberOfPlayersArray] = useState([]);

  const playerInputRef = useRef([]);
  const deckInputRef = useRef([]);
  // const player2InputRef = useRef();
  // const deck2InputRef = useRef();
  // const player3InputRef = useRef();
  // const deck3InputRef = useRef();
  // const player4InputRef = useRef();
  // const deck4InputRef = useRef();
  // const player5InputRef = useRef();
  // const deck5InputRef = useRef();
  // const player6InputRef = useRef();
  // const deck6InputRef = useRef();
  // const player7InputRef = useRef();
  // const deck7InputRef = useRef();
  // const player8InputRef = useRef();
  // const deck8InputRef = useRef();
  // const player9InputRef = useRef();
  // const deck9InputRef = useRef();
  // const player10InputRef = useRef();
  // const deck10InputRef = useRef();
  const gameRoundInputRef = useRef();
  const gameLocationInputRef = useRef();
  const gameDateInputRef = useRef();

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

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPlayers = playerInputRef;
    const enteredDecks = deckInputRef;
    const enteredGameRound = gameRoundInputRef.current.value;
    const enteredGameLocation = gameLocationInputRef.current.value;
    const enteredGameDate = gameDateInputRef.current.value;

    let result = {
      players: enteredPlayers,
      decks: enteredDecks,
      gameRound: enteredGameRound,
      gameLocation: enteredGameLocation,
      gameDate: enteredGameDate,
      gameId: enteredGameDate + enteredGameRound
    };

    props.onSaveResultData(result);

    gameRoundInputRef.current.value = '';
    gameLocationInputRef.current.value = '';
    gameDateInputRef.current.value = '';
  };

  return (
    <form type="submit" id="add-result" onSubmit={submitHandler}>
      <div>
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
      <div>
        {numberOfPlayersArray.length > 0 &&
          numberOfPlayersArray.map((number) => (
            <div key={number}>
              <label htmlFor={`player${number}`}>{`${number}. Platz `}</label>
              <select
                id={`player${number}`}
                name={`player${number}`}
                form="add-result"
              >
                <option value="">Spieler auswählen</option>
                {props.items.map((player, index) => (
                  <FormAddPlayerOptions
                    key={player}
                    player={player}
                    ref={(element) => (playerInputRef.current[index] = element)}
                  />
                ))}
              </select>
              <select
                id={`deck${number}`}
                name={`deck${number}`}
                form="add-result"
              >
                <option value="">Deck auswählen</option>
                {props.items.map((deckname, index) => (
                  <FormAddDeckOptions
                    key={deckname}
                    deckname={deckname}
                    ref={(element) => (deckInputRef.current[index] = element)}
                  />
                ))}
              </select>
            </div>
          ))}
      </div>
      <div>
        <label htmlFor="game-round">Spielrunde </label>
        <input
          type="number"
          id="game-round"
          name="game-round"
          form="add-result"
          ref={gameRoundInputRef}
        />
      </div>
      <div>
        <label htmlFor="game-location">Spielort </label>
        <input
          type="text"
          id="game-location"
          name="game-location"
          form="add-result"
          ref={gameLocationInputRef}
        />
      </div>
      <div>
        <label htmlFor="game-date">Datum </label>
        <input
          type="date"
          id="game-date"
          name="game-date"
          form="add-result"
          ref={gameDateInputRef}
        />
      </div>
      <div>
        <button type="submit" form="add-deck">
          hinzufügen
        </button>
        <button type="button" onClick={props.onCancel}>
          abbrechen
        </button>
      </div>
    </form>
  );
};

export default FormAddResult;
