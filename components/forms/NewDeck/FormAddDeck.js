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
    <div className="form_add_deck">
      <form type="submit" id="add-deck" onSubmit={submitHandler}>
        <div id="add_deck__deckname">
          <label htmlFor="deckname">Deck </label>
          <input
            type="text"
            id="deckname"
            name="deckname"
            form="add-deck"
            value={deckname}
            onChange={decknameChangeHandler}
          />
        </div>

        <div id="add_deck__commander">
          <FormAddDeckCommander
            onSaveCommander={saveCommanderHandler}
            onCheckSecondCommander={checkSecondCommanderHandler}
            onsaveSecondCommander={saveSecondCommanderHandler}
            commander={commander}
            secondCommander={secondCommander}
            secondCommanderCheck={secondCommanderCheck}
          />
        </div>

        <div id="add_deck__colors">
          <input
            type="checkbox"
            id="checkbox_white"
            form="add-deck"
            name="colors"
            value="white"
            onChange={colorWhiteChangeHandler}
            checked={colorWhite}
          />
          <label htmlFor="checkbox_white">
            <img src={white} alt="weiss" className="img-color" />
          </label>
          <input
            type="checkbox"
            id="checkbox_blue"
            form="add-deck"
            name="colors"
            value="blue"
            onChange={colorBlueChangeHandler}
            checked={colorBlue}
          />
          <label htmlFor="checkbox_blue">
            <img src={blue} alt="blau" className="img-color" />
          </label>
          <input
            type="checkbox"
            id="checkbox_black"
            form="add-deck"
            name="colors"
            value="black"
            onChange={colorBlackChangeHandler}
            checked={colorBlack}
          />
          <label htmlFor="checkbox_black">
            <img src={black} alt="schwarz" className="img-color" />
          </label>
          <input
            type="checkbox"
            id="checkbox_red"
            form="add-deck"
            name="colors"
            value="red"
            onChange={colorRedChangeHandler}
            checked={colorRed}
          />
          <label htmlFor="checkbox_red">
            <img src={red} alt="rot" className="img-color" />
          </label>
          <input
            type="checkbox"
            id="checkbox_green"
            form="add-deck"
            name="colors"
            value="green"
            onChange={colorGreenChangeHandler}
            checked={colorGreen}
          />
          <label htmlFor="checkbox_green">
            <img src={green} alt="gruen" className="img-color" />
          </label>
          <input
            type="checkbox"
            id="checkbox_colorless"
            form="add-deck"
            name="colors"
            value="colorless"
            onChange={colorlessChangeHandler}
            checked={colorless}
          />
          <label htmlFor="checkbox_colorless">
            <img src={colorlessImg} alt="farblos" className="img-color" />
          </label>
        </div>
        
        
        

        <div id="add_deck__player">
          <label htmlFor="player">Spieler </label>
          <select
            id="player"
            name="player"
            form="add-deck"
            value={player}
            onChange={playerDropdownChangeHandler}
          >
            <option value="">Spieler auswählen</option>
            {props.items.map((player) => (
              <FormAddPlayerOptions key={player} player={player} />
            ))}
          </select>
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
