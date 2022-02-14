import React from "react";

import "./PlayerStatistic.css";
import PlayerStatisticsDiagram from './PlayerStatisticsDiagram.js';

import white from "../../../img/white.jpg";
import blue from "../../../img/blue.jpg";
import black from "../../../img/black.jpg";
import red from "../../../img/red.jpg";
import green from "../../../img/green.jpg";
import colorlessImg from "../../../img/colorless.jpg";

const PlayerStatistic = (props) => {
  console.log(props);

  return (
    <div id="activePlayer">
      {props.activePlayer !== "" && (
        <div id="active_player__container">
          <div id="active_player__data">{props.activePlayer}</div>
          <div id="active_player__statistics">
            <div>
              Anzahl Spiele: <br />
              Anzahl Siege: <br />
              Gewinnrate:
            </div>
            <div>
              {props.playerStatistic.numberOfGames} <br />
              {props.playerStatistic.numberOfPlace1} <br />
              {props.playerStatistic.winRate} %
            </div>
          </div>
          <div>Platzierungen: </div>
            <PlayerStatisticsDiagram diagramData={props.playerDiagramData} />
          {props.playerStatistic.bestDeck !== "" && (
            <div id="active_player_deck">
              <div>
                Erfolgreichstes Deck: <br />
                Anzahl Siege:
              </div>
              <div>
                {props.playerStatistic.bestDeck}
                {props.playerStatistic.bestDeckColorWhite && (
                  <img src={white} alt="weiß" className="active_player__img" />
                )}
                {props.playerStatistic.bestDeckColorBlue && (
                  <img src={blue} alt="blau" className="active_player__img" />
                )}
                {props.playerStatistic.bestDeckColorBlack && (
                  <img
                    src={black}
                    alt="schwarz"
                    className="active_player__img"
                  />
                )}
                {props.playerStatistic.bestDeckColorRed && (
                  <img src={red} alt="rot" className="active_player__img" />
                )}
                {props.playerStatistic.bestDeckColorGreen && (
                  <img src={green} alt="grün" className="active_player__img" />
                )}
                {props.playerStatistic.bestDeckColorless && (
                  <img
                    src={colorlessImg}
                    alt="farblos"
                    className="active_player__img"
                  />
                )}
                <br />
                {props.playerStatistic.bestDeckNumberOfWins}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerStatistic;
