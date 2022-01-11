import React, { useState } from "react";

import "./FormAddDeck.css";
import FormAddDeckCommander from "./FormAddDeckCommander";
import FormAddPlayerOptions from "./FormAddPlayerOptions";

import white from "../../../img/white.jpg";
import blue from "../../../img/blue.jpg";
import black from "../../../img/black.jpg";
import red from "../../../img/red.jpg";
import green from "../../../img/green.jpg";
import colorlessImg from "../../../img/colorless.jpg";

const FormAddDeck = (props) => {
  const [deckname, setDeckname] = useState("");
  const [commander, setCommander] = useState("");
  const [secondCommanderCheck, setSecondCommanderCheck] = useState(false);
  const [secondCommander, setSecondCommander] = useState("");
  const [player, setPlayer] = useState("");
  const [colorWhite, setColorWhite] = useState(false);
  const [colorBlue, setColorBlue] = useState(false);
  const [colorBlack, setColorBlack] = useState(false);
  const [colorRed, setColorRed] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);
  const [colorless, setColorless] = useState(false);

  const decknameChangeHandler = (event) => {
    setDeckname(event.target.value);
  };

  const saveCommanderHandler = (commanderName) => {
    setCommander(commanderName);
  };

  const checkSecondCommanderHandler = (hasSecondCommander) => {
    setSecondCommanderCheck(hasSecondCommander);
  };

  const saveSecondCommanderHandler = (secondCommanderName) => {
    setSecondCommander(secondCommanderName);
  };

  const playerDropdownChangeHandler = (event) => {
    setPlayer(event.target.value);
  };

  const colorWhiteChangeHandler = (event) => {
    setColorWhite(event.target.checked);
  };

  const colorBlueChangeHandler = (event) => {
    setColorBlue(event.target.checked);
  };

  const colorBlackChangeHandler = (event) => {
    setColorBlack(event.target.checked);
  };

  const colorRedChangeHandler = (event) => {
    setColorRed(event.target.checked);
  };

  const colorGreenChangeHandler = (event) => {
    setColorGreen(event.target.checked);
  };

  const colorlessChangeHandler = (event) => {
    setColorless(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let deck = {
      deckname: deckname,
      commander: commander,
      secondCommander: secondCommander,
      player: player,
      colorWhite: colorWhite,
      colorBlue: colorBlue,
      colorBlack: colorBlack,
      colorRed: colorRed,
      colorGreen: colorGreen,
      colorless: colorless,
    };

    props.onSaveDeckData(deck);
    console.log(deck);

    setDeckname('');
    setCommander('');
    setSecondCommander('');
    setPlayer('');
    setColorWhite(false);
    setColorBlue(false);
    setColorBlack(false);
    setColorRed(false);
    setColorGreen(false);
    setColorless(false);
    setSecondCommanderCheck(false);
  };

  return (
    <div>
      <div id="table"></div>
      <form type="submit" id="add-deck" onSubmit={submitHandler}>
        <div>
          <label htmlFor="deckname">Name des Decks </label>
          <input
            type="text"
            id="deckname"
            name="deckname"
            form="add-deck"
            value={deckname}
            onChange={decknameChangeHandler}
          />
        </div>
        <div>
          <FormAddDeckCommander
            onSaveCommander={saveCommanderHandler}
            onCheckSecondCommander={checkSecondCommanderHandler}
            onsaveSecondCommander={saveSecondCommanderHandler}
            commander={commander}
            secondCommander={secondCommander}
            secondCommanderCheck={secondCommanderCheck}
          />
        </div>

        <div>
          <label htmlFor="player">Name des Spielers </label>
          <select
            id="player"
            name="player"
            form="add-deck"
            value={player}
            onChange={playerDropdownChangeHandler}
          >
            <option value="">Spieler auswählen</option>
            {props.items.map(player => (
              <FormAddPlayerOptions key={player} player={player} />
            ))}

          </select>
        </div>
        <div>
          <label htmlFor="colors">Farben </label>
          <br />
          <input
            type="checkbox"
            id="white"
            form="add-deck"
            name="colors"
            value="white"
            onChange={colorWhiteChangeHandler}
            checked={colorWhite}
          />
          <img src={white} alt="weiss" className="img-color" />
          <input
            type="checkbox"
            id="blue"
            form="add-deck"
            name="colors"
            value="blue"
            onChange={colorBlueChangeHandler}
            checked={colorBlue}
          />
          <img src={blue} alt="blau" className="img-color" />
          <input
            type="checkbox"
            id="black"
            form="add-deck"
            name="colors"
            value="black"
            onChange={colorBlackChangeHandler}
            checked={colorBlack}
          />
          <img src={black} alt="schwarz" className="img-color" />
          <input
            type="checkbox"
            id="red"
            form="add-deck"
            name="colors"
            value="red"
            onChange={colorRedChangeHandler}
            checked={colorRed}
          />
          <img src={red} alt="rot" className="img-color" />
          <input
            type="checkbox"
            id="green"
            form="add-deck"
            name="colors"
            value="green"
            onChange={colorGreenChangeHandler}
            checked={colorGreen}
          />
          <img src={green} alt="gruen" className="img-color" />
          <input
            type="checkbox"
            id="colorless"
            form="add-deck"
            name="colors"
            value="colorless"
            onChange={colorlessChangeHandler}
            checked={colorless}
          />
          <img src={colorlessImg} alt="farblos" className="img-color" />
        </div>
        <div>
          <button type="submit" form="add-deck">
            Deck hinzufügen
          </button>
          <button type="button" onClick={props.onCancel}>
            abbrechen
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddDeck;
