import React from "react";

import ResultItem from "./ResultItem";

import "./TableResults.css";

function TableResults(props) {

  const createDateArray = (res) => {
    let DateArray = [];
    if (res.length > 0) {
      DateArray.push({
        gameDate: res[0].gameDate,
        gameLocation: res[0].gameLocation,
      });
    }
    if (res.length > 0) {
      for (let i = 1; i < res.length; i++) {
        if (res[i].gameDate !== res[i - 1].gameDate) {
          DateArray.push({
            gameDate: res[i].gameDate,
            gameLocation: res[i].gameLocation,
          });
        }
      }
    }

    return DateArray;
  };

  const outputDate = (dateInput) => {
    let date = new Date(dateInput.substring(0, 4), parseInt(dateInput.substring(5, 7)) -1, dateInput.substring(8, 10));
    let date_output = date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit" 
    });
    return date_output;
  };

  const removeResultHandler = (gameId) => {
    props.onRemoveResult(gameId);
  };



  // <div>
  //     <table id="resultlist">
  //       <thead>
  //         <tr>
  //           <th>Datum</th>
  //           <th>Runde</th>
  //           <th>Ort</th>
  //           <th>Ergebnis</th>
  //           <th></th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {props.results.map((result) => (
  //           <ResultItem
  //             key={result.gameId}
  //             gameId={result.gameId}
  //             players={result.players}
  //             decks={result.decks}
  //             gameDate={result.gameDate}
  //             gameRound={result.gameRound}
  //             gameLocation={result.gameLocation}
  //             onRemoveResult={removeResultHandler}
  //           />
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>

  return (
    <div id="table_results">
      {createDateArray(props.results).map((date) => (
        <div key={date.gameDate} className="table_results__date_container">

          <div className="table_results__date_location">
            <div className="table_results__date">{outputDate(date.gameDate)}</div>
            <div>{date.gameLocation}</div>
          </div>
          <div className="table_results__round">
            {props.results.filter(result => result.gameDate === date.gameDate).map(result => (
              <ResultItem
                key={result.gameId}
                gameId={result.gameId}
                players={result.players}
                decks={result.decks}
                gameRound={result.gameRound}
                onRemoveResult={removeResultHandler}
              />
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default TableResults;
