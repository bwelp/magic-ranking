import React from "react";

import white from "../../../img/white.jpg";
import blue from "../../../img/blue.jpg";
import black from "../../../img/black.jpg";
import red from "../../../img/red.jpg";
import green from "../../../img/green.jpg";
import colorlessImg from "../../../img/colorless.jpg";

const DeckItem = (props) => {
  return (
    <tr>
      <td>{props.deckname}</td>
      <td>{props.player}</td>
      <td>
        {props.colorWhite && (
          <img src={white} alt="weiß" className="img-color" />
        )}
        {props.colorBlue && <img src={blue} alt="blau" className="img-color" />}
        {props.colorBlack && (
          <img src={black} alt="schwarz" className="img-color" />
        )}
        {props.colorRed && <img src={red} alt="rot" className="img-color" />}
        {props.colorGreen && (
          <img src={green} alt="grün" className="img-color" />
        )}
        {props.colorless && (
          <img src={colorlessImg} alt="farblos" className="img-color" />
        )}
      </td>
      <td>
        {props.commander}
        <br />
        {props.secondCommander}
      </td>
    </tr>
  );
};

export default DeckItem;
