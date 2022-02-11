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

  // const RankDiagram = () => {
  //   let diagramData = { values: [
  //     {label: "1. Platz", size: props.deckStatistic.numOfPlace1, color: "#FF2400"},
  //     {label: "2. Platz", size: props.deckStatistic.numOfPlace2, color: "#FEFE33"},
  //     {label: "3. Platz", size: props.deckStatistic.numOfPlace3, color: "#00FF00"},
  //     {label: "4. Platz", size: props.deckStatistic.numOfPlace4, color: "#0000FF"}
  //   ]};

  //   let canvas = document.getElementById("active_deck__rank_diagramm");

  //   let canvasWidth = 200;
  //   let canvasHeight = 200;
  //   canvas.setAttribute('width', canvasWidth);
  //   canvas.setAttribute('height', canvasHeight);
  //   let cv = canvas.getContext("2d");

  //   let graphMax = 20;
  //   let graphPadding = 10;
  //   let graphFactor = (canvasHeight - (2 * graphPadding)) / graphMax;
  //   let graphWidth = (canvasWidth - graphPadding) / diagramData.values.length;
  //   let graphTextcolor = '#000000';
    
  //   for (let i= 0; i < diagramData.values.length; i++) {
  //     tmpTop = (canvasHeight - (graphFactor * diagramData.values.size)).toFixed() - graphPadding;
  //     tmpHeight = (diagramData.values.size * graphFactor).toFixed();
  //     cv.fillStyle = diagramData.values.color;
  //     cv.fillRect(graphWidth + ((i - 1) * graphWidth) + graphPadding, tmpTop, graphWidth - graphPadding, tmpHeight);
  //     cv.fillStyle = graphTextcolor;
  //     cv.fillText(diagramData.values.label, graphWidth + ((i - 1) * graphWidth) + graphPadding + 2, canvasHeight - 2, graphWidth);
  //   }

  // };

  return (
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
          <div>Anzahl Spiele: {props.deckStatistic.numberOfGames}</div>
          <div>Anzahl Siege: {props.deckStatistic.numberOfPlace1}</div>
          <div>Gewinnrate: {props.deckStatistic.winRate} %</div>
          <div>Platzierungen: </div>
          <DeckStatisticsDiagram diagramData={props.diagramData}/>
      </div>
    </div>
  );
};

export default DeckStatistics;