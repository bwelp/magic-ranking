import React from "react";

import './DeckItem.css';

import white from "../../../img/white_lightgray.jpg";
import blue from "../../../img/blue_lightgray.jpg";
import black from "../../../img/black_lightgray.jpg";
import red from "../../../img/red_lightgray.jpg";
import green from "../../../img/green_lightgray.jpg";
import colorlessImg from "../../../img/colorless_lightgray.jpg";
import commander_symbol from "../../../img/commander_symbol_2_lightgray.png";
import star from "../../../img/star_lightgray.png";
import change from "../../../img/change_gray.png";
import deleteX from "../../../img/delete_gray_2.png";

const DeckItem = (props) => {

  const removeDeckClickHandler = (event) => {
    props.onRemoveDeck(event.target.attributes.deckid.value);
  };

  const changeDeckClickHandler = (event) => {
    console.log("Change Deck");
    //props.onChangeDeck(event.target.attributes.deckid.value);
  };

  const deckItemClickHandler = (event) => {
    props.onOpenStatistic(event.target.attributes.deck.value);
  };

  return (
    <div
      className="deck_item"
      deck={props.deckname}
      onClick={deckItemClickHandler}
    >
      <div className="deck_item__deckname" deck={props.deckname}>
        <div deck={props.deckname}>{props.deckname}</div>
        <div deck={props.deckname}>
          {props.colorWhite && (
            <img
              src={white}
              alt="weiß"
              className="deck_item__img"
              deck={props.deckname}
            />
          )}
          {props.colorBlue && (
            <img
              src={blue}
              alt="blau"
              className="deck_item__img"
              deck={props.deckname}
            />
          )}
          {props.colorBlack && (
            <img
              src={black}
              alt="schwarz"
              className="deck_item__img"
              deck={props.deckname}
            />
          )}
          {props.colorRed && (
            <img
              src={red}
              alt="rot"
              className="deck_item__img"
              deck={props.deckname}
            />
          )}
          {props.colorGreen && (
            <img
              src={green}
              alt="grün"
              className="deck_item__img"
              deck={props.deckname}
            />
          )}
          {props.colorless && (
            <img
              src={colorlessImg}
              alt="farblos"
              className="deck_item__img"
              deck={props.deckname}
            />
          )}
        </div>
      </div>
      <div className="deck_item__commander" deck={props.deckname}>
        <img
          src={commander_symbol}
          alt="Commander-Symbol"
          className="deck_item__img"
          deck={props.deckname}
        />
        {props.commander}
        <br />
        {props.secondCommander !== "" && (
          <img
            src={commander_symbol}
            alt="Commander-Symbol"
            className="deck_item__img"
            deck={props.deckname}
          />
        )}
        {props.secondCommander}
      </div>
      <div className="deck_item__power" deck={props.deckname}>
        <img src={star} alt="S" className="deck_item__img" />{" "}
        {props.power}
      </div>
      <div>
        <img
          src={change}
          alt="C"
          className="deck_item__button"
          onClick={changeDeckClickHandler}
          deck=""
          deckname={props.deckname}
          deckid={props.id}
        />
      </div>
      <div>
        <img
          src={deleteX}
          alt="X"
          className="deck_item__button"
          onClick={removeDeckClickHandler}
          deck=""
          deckname={props.deckname}
          deckid={props.id}
        />
      </div>
    </div>
  );
};

export default DeckItem;
