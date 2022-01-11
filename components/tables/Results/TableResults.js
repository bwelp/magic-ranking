import React from "react";

import ResultItem from "./ResultItem";

import "./TableResults.css";

function TableResults(props) {
  const removeResultHandler = (gameId) => {
    props.onRemoveResult(gameId);
  };

  return (
    <div>
      <table id="resultlist">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Runde</th>
            <th>Ort</th>
            <th>Ergebnis</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((result) => (
            <ResultItem
              key={result.gameId}
              players={result.players}
              decks={result.decks}
              gameDate={result.gameDate}
              gameRound={result.gameRound}
              gameLocation={result.gameLocation}
              onRemoveDeck={removeResultHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableResults;
