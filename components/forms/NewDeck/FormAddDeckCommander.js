import React from "react";

import "./FormAddDeckCommander.css";

const FormAddCommander = (props) => {
  const commanderChangeHandler = (event) => {
    props.onSaveCommander(event.target.value);
  };

  const secondCommanderChangeHandler = (event) => {
    props.onsaveSecondCommander(event.target.value);
  };

  const checkboxChangeHandler = (event) => {
    props.onCheckSecondCommander(event.target.checked);
  };

  const addSecondCommander = () => {
    if (props.secondCommanderCheck === true) {
      return (
        <div>
          <label htmlFor="secondCommander">2. Commander </label>
          <input
            type="text"
            id="secondCommander"
            name="secondCommander"
            value={props.secondCommander}
            onChange={secondCommanderChangeHandler}
            form="add-deck"
          />
        </div>
      );
    }
  };
  
  return (
    <div>
      <div>
        <label htmlFor="commander">Commander </label>
        <input
          type="text"
          id="commander"
          name="commander"
          onChange={commanderChangeHandler}
          form="add-deck"
          value={props.commander}
        />
      </div>
      <div>
        <label htmlFor="secondCommanderCheck">2. Commander hinzufügen? </label>
        <input
          type="checkbox"
          id="secondCommandercheck"
          onChange={checkboxChangeHandler}
          form="add-deck"
          checked={props.secondCommanderCheck}
        />
        {addSecondCommander()}
      </div>
    </div>
  );
};

export default FormAddCommander;
