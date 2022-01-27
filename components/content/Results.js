import React, { useState, useEffect } from "react";

import NewResult from "../forms/NewResult/NewResult";
import TableResults from "../tables/Results/TableResults";

function Results(props) {
  const restoreResults = () => {
    let savedResults = localStorage.getItem("results");
    if (savedResults !== null && savedResults !== []) {
      let restoredResults = [];
      JSON.parse(savedResults).forEach((result) => {
        restoredResults.push(result);
      });
      return restoredResults;
    } else {
      return [];
    }
  };

  const [results, setResults] = useState(() => {
    return restoreResults();
  });

  const saveResults = () => {
    localStorage.setItem("results", JSON.stringify(results));
  };

  function addResultHandler(enteredResultData) {
    setResults(prevResults => {
        return [...prevResults, enteredResultData]
    });
    props.onForwardResults(results);
  };

  function removeResultHandler(gameId) {
    setResults(function(prevResults) {
      let index = -1;
      for (let i = 0; i < prevResults.length; i++) {
        if (prevResults[i].gameId === gameId) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        prevResults.splice(index, 1);
      }
      return [...prevResults];
    });
    props.onForwardResults(results);
  };

  useEffect(() => {
      saveResults();
      console.log("UseEffect Save Results");
  });

  useEffect(() => {
    props.onForwardResults(results);
    console.log("UseEffect Forward Results");
  });

  return (
    <div>
      <NewResult onAddResult={addResultHandler} players={props.players} decknames={props.decknames} />
      <TableResults items={results} onRemoveResult={removeResultHandler} />
    </div>
  );
}

export default Results;
