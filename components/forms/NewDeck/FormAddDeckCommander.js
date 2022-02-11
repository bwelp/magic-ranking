import React from "react";

import "./FormAddDeckCommander.css";

const FormAddCommander = (props) => {
  // const commanderChangeHandler = (event) => {
  //   props.onSaveCommander(event.target.value);
  // };

  // const secondCommanderChangeHandler = (event) => {
  //   props.onsaveSecondCommander(event.target.value);
  // };

  // const checkboxChangeHandler = (event) => {
  //   props.onCheckSecondCommander(event.target.checked);
  // };

  const commanderMinusHandler = (event) => {
    props.onChangeSecondCommanderCheck(false);
  };

  const commanderPlusHandler = (event) => {
    props.onChangeSecondCommanderCheck(true);
  };

  const addSecondCommander = () => {
    if (props.secondCommanderCheck === true) {
      return (
        <div className={props.secondCommanderInputClasses}>
          <label htmlFor="secondCommander">2. Commander </label>
          <input
            type="text"
            id="secondCommander"
            name="secondCommander"
            value={props.secondCommander}
            onChange={props.onChangeSecondCommander}
            onBlur={props.onBlurSecondCommander}
            form="add-deck"
          />
          <button
            type="button"
            id="commanderMinus"
            onClick={commanderMinusHandler}
          >
            X
          </button>
          {props.secondCommanderHasError &&
          <p className="error-text">Bitte eine gültigen Commander eingeben!</p>}
        </div>
      );
    }
  };

  // <div>
  //       <label htmlFor="secondCommanderCheck">2. Commander hinzufügen? </label>
  //       <input
  //         type="checkbox"
  //         id="secondCommandercheck"
  //         onChange={checkboxChangeHandler}
  //         form="add-deck"
  //         checked={props.secondCommanderCheck}
  //       />
  //       {addSecondCommander()}
  //     </div>
  
  return (
    <div>
      <div className={props.commanderInputClasses}>
        <label htmlFor="commander">Commander </label>
        <input
          type="text"
          id="commander"
          name="commander"
          onChange={props.onChangeCommander}
          onBlur={props.onBlurCommander}
          form="add-deck"
          value={props.commander}
        />
        {!props.secondCommanderCheck && <button
          type="button"
          id="CommanderPlus"
          form="add-deck"
          onClick={commanderPlusHandler}
        >
          +
        </button>}
        {props.commanderHasError &&
          <p className="error-text">Bitte eine gültigen Commander eingeben!</p>}
      </div>
      {addSecondCommander()}
    </div>
  );
};

export default FormAddCommander;
