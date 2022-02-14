import React from 'react';

import './DeckStatistics.css';
import DeckStatisticsDiagram from './DeckStatisticsDiagram.js';

import white from "../../../img/white_lightgray.jpg";
import blue from "../../../img/blue_lightgray.jpg";
import black from "../../../img/black_lightgray.jpg";
import red from "../../../img/red_lightgray.jpg";
import green from "../../../img/green_lightgray.jpg";
import colorlessImg from "../../../img/colorless_lightgray.jpg";
import commander_symbol from "../../../img/commander_symbol_2_lightgray.png";

const DeckStatistics = (props) => {

  return (
    <div id="active_deck">
      {props.activeDeck !== "" && (
        <div id="active_deck__container">
          <div id="active_deck__data">
            <div className="active_deck__deckname">
              <div>{props.deck.deckname}</div>
              <div>
                {props.deck.colorWhite && (
                  <img src={white} alt="weiß" className="active_deck__img" />
                )}
                {props.deck.colorBlue && (
                  <img src={blue} alt="blau" className="active_deck__img" />
                )}
                {props.deck.colorBlack && (
                  <img src={black} alt="schwarz" className="active_deck__img" />
                )}
                {props.deck.colorRed && (
                  <img src={red} alt="rot" className="active_deck__img" />
                )}
                {props.deck.colorGreen && (
                  <img src={green} alt="grün" className="active_deck__img" />
                )}
                {props.deck.colorless && (
                  <img
                    src={colorlessImg}
                    alt="farblos"
                    className="active_deck__img"
                  />
                )}
              </div>
            </div>
            <div className="active_deck__commander">
              <img
                src={commander_symbol}
                alt="Commander-Symbol"
                className="active_deck__img"
              />
              {props.deck.commander}
              <br />
              {props.deck.secondCommander !== "" && (
                <img
                  src={commander_symbol}
                  alt="Commander-Symbol"
                  className="active_deck__img"
                />
              )}
              {props.deck.secondCommander}
            </div>
          </div>
          <div id="active_deck__statistics">
            <div id="active_deck__statistics_number">
              <div>Anzahl Spiele: {props.deckStatistic.numberOfGames}</div>
              <div>Anzahl Siege: {props.deckStatistic.numberOfPlace1}</div>
            </div>
            <div>Gewinnrate: {props.deckStatistic.winRate} %</div>
            <br></br>
            <div>Platzierungen: </div>
            <DeckStatisticsDiagram diagramData={props.diagramData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeckStatistics;