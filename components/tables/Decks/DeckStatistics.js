import React from 'react';

import './DeckStatistics.css';
import DeckStatisticsDiagram from './DeckStatisticsDiagram.js';

import arrowUp from "../../../img/arrow_up_lightgray.png";
import arrowDown from "../../../img/arrow_down_lightgray.png";
import cup from "../../../img/cup_lightgray_4.png";
import number from "../../../img/number_lightgray.png";
// import average from "../../../img/average_lightgray.png";
import star from "../../../img/star_lightgray.png";
// import thumb from "../../../img/thumb_up_lightgray.png";
// import handStar from "../../../img/hand_star_lightgray.png";
// import handStar2 from "../../../img/hand_star_lightgray_2.png";
import percent from "../../../img/percent_lightgray.png";

const DeckStatistics = (props) => {

  return (
    <div id="active_deck">
      {props.activeDeck !== "" && (
        <div id="active_deck__container">
          <div className="active_deck__header">Deckstatistik</div>
          <div id="active_deck__statistics">
            <div id="active_deck__statistics_number">
              <div>
                <img src={number} alt="#" className="active_deck__img" />
                Anzahl Spiele: {props.deckStatistic.numberOfGames}
              </div>
              <div>
                <img src={cup} alt="P" className="active_deck__img" />
                Anzahl Siege: {props.deckStatistic.numberOfPlace1}
              </div>
            </div>
            <div>
              <img src={percent} alt="%" className="active_deck__img" />{" "}
              Gewinnrate: {props.deckStatistic.winRate} %
            </div>
            <br></br>
            {props.deckStatistic.countEval !== 0 && (
              <div>
                <div>
                  <img src={star} alt="S" className="active_deck__img" />{" "}
                  Durchschnittsbewertung: {props.deck.power}
                </div>
                <div>
                  <img src={number} alt="#" className="active_deck__img" />{" "}
                  Anzahl Bewertungen: {props.deckStatistic.countEval}
                </div>
                <div>
                  <img src={arrowUp} alt="U" className="active_deck__img" />{" "}
                  Höchste Bewertung: {props.deckStatistic.maxEval}
                </div>
                <div>
                  <img src={arrowDown} alt="D" className="active_deck__img" />{" "}
                  Niedrigste Bewertung: {props.deckStatistic.minEval}
                </div>
              </div>
            )}
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