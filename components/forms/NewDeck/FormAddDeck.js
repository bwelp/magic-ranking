import React, { useState } from "react";

import "./FormAddDeck.css";
import FormAddDeckCommander from "./FormAddDeckCommander";
import FormAddPlayerOptions from "./FormAddPlayerOptions";
import useFormInput from "../../../hooks/use-form-input";

import white from "../../../img/white.jpg";
import blue from "../../../img/blue.jpg";
import black from "../../../img/black.jpg";
import red from "../../../img/red.jpg";
import green from "../../../img/green.jpg";
import colorlessImg from "../../../img/colorless.jpg";

const FormAddDeck = (props) => {
  const {
    value: deckname,
    isValid: decknameIsValid,
    hasError: decknameHasError,
    valueInputClasses: decknameInputClasses,
    valueChangeHandler: decknameChangeHandler,
    inputBlurHandler: decknameBlurHandler,
    resetInput: resetDeckname,
  } = useFormInput("text", (value) => value.trim() !== "");

  const {
    value: player,
    isValid: playerIsValid,
    hasError: playerHasError,
    valueInputClasses: playerInputClasses,
    valueChangeHandler: playerChangeHandler,
    inputBlurHandler: playerBlurHandler,
    resetInput: resetPlayer,
  } = useFormInput("text", (value) => value !== "");

  const {
    value: commander,
    isValid: commanderIsValid,
    hasError: commanderHasError,
    valueInputClasses: commanderInputClasses,
    valueChangeHandler: commanderChangeHandler,
    inputBlurHandler: commanderBlurHandler,
    resetInput: resetCommander,
  } = useFormInput("text", (value) => value.trim() !== "");

  const {
    value: secondCommanderCheck,
    valueChangeHandler: secondCommanderCheckChangeHandler,
    resetInput: resetSecondCommanderCheck,
  } = useFormInput("button", () => true);

  const {
    value: secondCommander,
    isValid: secondCommanderIsValid,
    hasError: secondCommanderHasError,
    valueInputClasses: secondCommanderInputClasses,
    valueChangeHandler: secondCommanderChangeHandler,
    inputBlurHandler: secondCommanderBlurHandler,
    resetInput: resetSecondCommander,
  } = useFormInput("text", (value) => value.trim() !== "");

  const {
    value: colorWhite,
    valueChangeHandler: colorWhiteChangeHandler,
    resetInput: resetColorWhite,
  } = useFormInput("checkbox", () => true);

  const {
    value: colorBlue,
    valueChangeHandler: colorBlueChangeHandler,
    resetInput: resetColorBlue,
  } = useFormInput("checkbox", () => true);

  const {
    value: colorBlack,
    valueChangeHandler: colorBlackChangeHandler,
    resetInput: resetColorBlack,
  } = useFormInput("checkbox", () => true);

  const {
    value: colorRed,
    valueChangeHandler: colorRedChangeHandler,
    resetInput: resetColorRed,
  } = useFormInput("checkbox", () => true);

  const {
    value: colorGreen,
    valueChangeHandler: colorGreenChangeHandler,
    resetInput: resetColorGreen,
  } = useFormInput("checkbox", () => true);

  const {
    value: colorless,
    valueChangeHandler: colorlessChangeHandler,
    resetInput: resetColorless,
  } = useFormInput("checkbox", () => true);

  // const [deckname, setDeckname] = useState("");
  // const [commander, setCommander] = useState("");
  // const [secondCommanderCheck, setSecondCommanderCheck] = useState(false);
  // const [secondCommander, setSecondCommander] = useState("");
  // const [player, setPlayer] = useState("");
  // const [colorWhite, setColorWhite] = useState(false);
  // const [colorBlue, setColorBlue] = useState(false);
  // const [colorBlack, setColorBlack] = useState(false);
  // const [colorRed, setColorRed] = useState(false);
  // const [colorGreen, setColorGreen] = useState(false);
  // const [colorless, setColorless] = useState(false);

  // const decknameChangeHandler = (event) => {
  //   setDeckname(event.target.value);
  // };

  // const saveCommanderHandler = (commanderName) => {
  //   setCommander(commanderName);
  // };

  // const checkSecondCommanderHandler = (hasSecondCommander) => {
  //   setSecondCommanderCheck(hasSecondCommander);
  // };

  // const saveSecondCommanderHandler = (secondCommanderName) => {
  //   setSecondCommander(secondCommanderName);
  // };

  // const playerDropdownChangeHandler = (event) => {
  //   setPlayer(event.target.value);
  // };

  // const colorWhiteChangeHandler = (event) => {
  //   setColorWhite(event.target.checked);
  // };

  // const colorBlueChangeHandler = (event) => {
  //   setColorBlue(event.target.checked);
  // };

  // const colorBlackChangeHandler = (event) => {
  //   setColorBlack(event.target.checked);
  // };

  // const colorRedChangeHandler = (event) => {
  //   setColorRed(event.target.checked);
  // };

  // const colorGreenChangeHandler = (event) => {
  //   setColorGreen(event.target.checked);
  // };

  // const colorlessChangeHandler = (event) => {
  //   setColorless(event.target.checked);
  // };

  const compareDecknames = () => {
    for (let i = 0; i < props.decks.length; i++) {
      if(deckname === props.decks[i].deckname) {
        return false;
      }
    }
    return true;
  };

  const validateColors = () => {
    if (!colorWhite && !colorBlue && !colorBlack && !colorRed && !colorGreen && !colorless) {
      return "Bitte mindestens eine Farbe auswählen!";
    }
    else if ((colorWhite || colorBlue || colorBlack || colorRed || colorGreen) && colorless) {
      return "Farbe und farblos darf nicht gleichzeitig ausgewählt werden!";
    }
    else {
      return "valid";
    }

  };

  const [decknameIsUnique, setDecknameIsUnique] = useState(true);
  const [colorsAreValid, setColorsAreValid] = useState(true);
  const [colorErrorMessage, setColorErrorMessage] = useState("");

  let formIsValid = false;

  if (
    decknameIsValid &&
    playerIsValid &&
    commanderIsValid &&
    (secondCommanderCheck ? secondCommanderIsValid : true)
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid === false) {
      return; 
    }

    let uniqueDeckname = compareDecknames();
    let colorErrMessage = validateColors()
    setColorErrorMessage(colorErrMessage);

    if (colorErrMessage !== "valid") {
      setColorsAreValid(false);
    } else {
      setColorsAreValid(true);
    }

    if (!uniqueDeckname) {
      setDecknameIsUnique(false);
    } else {
      setDecknameIsUnique(true);
    }

    if (!uniqueDeckname || colorErrMessage !== "valid") {
      return;
    }

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

    resetDeckname();
    resetCommander();
    resetSecondCommander();
    resetPlayer();
    resetColorWhite();
    resetColorBlue();
    resetColorBlack();
    resetColorRed();
    resetColorGreen();
    resetColorless();
    resetSecondCommanderCheck();
  };

  return (
    <div className="form_add_deck">
      <form
        type="submit"
        id="add-deck"
        onSubmit={submitHandler}
      >
        <div id="add_deck__deckname" className={decknameInputClasses}>
          <label htmlFor="deckname">Deck </label>
          <input
            type="text"
            id="deckname"
            name="deckname"
            form="add-deck"
            value={deckname}
            onChange={decknameChangeHandler}
            onBlur={decknameBlurHandler}
          />
          {decknameHasError && (
            <p className="error-text">
              Bitte einen gültigen Decknamen eingeben!
            </p>
          )}
          {!decknameIsUnique && (
            <p className="error-text">
              Deckname ist bereits vergeben!
            </p>
          )}
        </div>

        <div id="add_deck__commander">
          <FormAddDeckCommander
            onChangeCommander={commanderChangeHandler}
            onChangeSecondCommanderCheck={secondCommanderCheckChangeHandler}
            onChangeSecondCommander={secondCommanderChangeHandler}
            onBlurCommander={commanderBlurHandler}
            onBlurSecondCommander={secondCommanderBlurHandler}
            commander={commander}
            secondCommander={secondCommander}
            secondCommanderCheck={secondCommanderCheck}
            commanderInputClasses={commanderInputClasses}
            secondCommanderInputClasses={secondCommanderInputClasses}
            commanderHasError={commanderHasError}
            secondCommanderHasError={secondCommanderHasError}
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
          {!colorsAreValid && (
            <p className="error-text">
              {colorErrorMessage}
            </p>
          )}
        </div>

        <div id="add_deck__player" className={playerInputClasses}>
          <label htmlFor="player">Spieler </label>
          <select
            id="player"
            name="player"
            form="add-deck"
            value={player}
            onChange={playerChangeHandler}
            onBlur={playerBlurHandler}
          >
            <option value="">Spieler auswählen</option>
            {props.players.map((player) => (
              <FormAddPlayerOptions
                key={player.player}
                player={player.player}
              />
            ))}
          </select>
          {playerHasError && (
            <p className="error-text">Bitte einen Spielernamen auswählen!</p>
          )}
        </div>

        <div>
          <button type="submit" form="add-deck" disabled={!formIsValid}>
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
