import React, { useState } from "react";

import TableRanking from "../tables/Ranking/TableRanking";
import "./Ranking.css";

const Ranking = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  let yearArray = [];
  const { results } = props;

  if (results.length > 0) {
    yearArray.push(results[0].gameDate.substr(0, 4));
  }
  if (results.length > 1) {
    for (let i = 1; i < results.length; i++) {
      if (
        results[i - 1].gameDate.substr(0, 4) !==
        results[i].gameDate.substr(0, 4)
      ) {
        yearArray.push(results[i].gameDate.substr(0, 4));
      }
    }
  }

  const filterYearButtonClickHandler = (event) => {
    console.log(event.target.value);
    setFilteredYear(event.target.value);
  };

  return (
    <div> 
      <div className="headline_container">
        <div className="headline">Bestenliste </div>
        <button
          type="button"
          value=""
          className={
            filteredYear === ""
              ? "ranking_filter_year_button filterActive"
              : "ranking_filter_year_button"
          }
          onClick={filterYearButtonClickHandler}
        >
          Gesamt
        </button>
        {yearArray.length > 0 &&
          yearArray.map((year) => (
            <button
              type="button"
              key={year}
              value={year}
              className={
                year === filteredYear
                  ? "ranking_filter_year_button filterActive"
                  : "ranking_filter_year_button"
              }
              onClick={filterYearButtonClickHandler}
            >
              {year}
            </button>
          ))}
      </div>
      {props.results.length > 0 && (
        <TableRanking
          key={filteredYear}
          results={props.results}
          players={props.players}
          filteredYear={filteredYear}
        />
      )}
      {props.results.length === 0 && <p id="start">Leg los! Gib Spieler, Decks und Ergebnisse ein!</p>}
    </div>
  );
};

export default Ranking;
