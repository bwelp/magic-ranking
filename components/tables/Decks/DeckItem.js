import React from "react";

import './DeckItem.css';

import white from "../../../img/white_lightgray.jpg";
import blue from "../../../img/blue_lightgray.jpg";
import black from "../../../img/black_lightgray.jpg";
import red from "../../../img/red_lightgray.jpg";
import green from "../../../img/green_lightgray.jpg";
import colorlessImg from "../../../img/colorless_lightgray.jpg";
import commander_symbol from "../../../img/commander_symbol_2_lightgray.png";

const DeckItem = (props) => {
  const removeDeckClickHandler = (event) => {
    props.onRemoveDeck(event.target.attributes.deckname.value);
  };

  const deckItemClickHandler = (event) => {
    props.onOpenStatistic(event.target.attributes.deck.value);
  }

  // <tr>
  //     <td>{props.deckname}</td>
  //     <td>{props.player}</td>
  //     <td>
  //       {props.colorWhite && (
  //         <img src={white} alt="weiß" className="img-color" />
  //       )}
  //       {props.colorBlue && <img src={blue} alt="blau" className="img-color" />}
  //       {props.colorBlack && (
  //         <img src={black} alt="schwarz" className="img-color" />
  //       )}
  //       {props.colorRed && <img src={red} alt="rot" className="img-color" />}
  //       {props.colorGreen && (
  //         <img src={green} alt="grün" className="img-color" />
  //       )}
  //       {props.colorless && (
  //         <img src={colorlessImg} alt="farblos" className="img-color" />
  //       )}
  //     </td>
  //     <td>
  //       {props.commander}
  //       <br />
  //       {props.secondCommander}
  //     </td>
  //     <td>
  //       <button type="click" onClick={removeDeckClickHandler} deck={props.deckname}>X</button>
  //     </td>
  //   </tr>
  // );

  return (
    <div className="deck_item" deck={props.deckname} onClick={deckItemClickHandler}>
      <div className="deck_item__deckname" deck={props.deckname}>
        <div deck={props.deckname}>{props.deckname}</div>
        <div deck={props.deckname}>
          {props.colorWhite && (
            <img src={white} alt="weiß" className="deck_item__img" deck={props.deckname} />
          )}
          {props.colorBlue && (
            <img src={blue} alt="blau" className="deck_item__img" deck={props.deckname} />
          )}
          {props.colorBlack && (
            <img src={black} alt="schwarz" className="deck_item__img" deck={props.deckname} />
          )}
          {props.colorRed && <img src={red} alt="rot" className="deck_item__img" deck={props.deckname} />}
          {props.colorGreen && (
            <img src={green} alt="grün" className="deck_item__img" deck={props.deckname} />
          )}
          {props.colorless && (
            <img src={colorlessImg} alt="farblos" className="deck_item__img" deck={props.deckname} />
          )}
        </div>
      </div>
      <div className="deck_item__commander" deck={props.deckname}>
        <img src={commander_symbol} alt="Commander-Symbol" className="deck_item__img" deck={props.deckname} />{props.commander}
        <br />
        {props.secondCommander !== "" && <img src={commander_symbol} alt="Commander-Symbol" className="deck_item__img" deck={props.deckname} />}{props.secondCommander}
      </div>
      <div>
        <button 
          type="click"
          className="deck_item__remove_button"
          onClick={removeDeckClickHandler}
          deck=""
          deckname={props.deckname}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default DeckItem;
