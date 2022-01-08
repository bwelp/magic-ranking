import React from "react";

import "./Content.css";
import Players from "./tables/Players/Players";
import FormAddDeck from "./forms/NewDeck/FormAddDeck";
import FormAddResult from "./forms/NewResult/FormAddResult";
import Blank from "./tables/Blank";

function Content(props) {
  const chooseContent = () => {
    switch (props.items) {
      case "addPlayer":
        return <Players />;
      case "addDeck":
        return <FormAddDeck />;
      case "addResult":
        return <FormAddResult />;
      default:
        return <Blank />;
    }
  };

  return <div>{chooseContent()}</div>;
}

export default Content;
