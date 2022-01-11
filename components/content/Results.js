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
  };

  function removeResultHandler(result) {
    setResults(function(prevResults) {
      let index = -1;
      for (let i = 0; i < prevResults.length; i++) {
        if (prevResults[i].result === result) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        prevResults.splice(index, 1);
      }
      return [...prevResults];
    });
  };

  useEffect(() => {
      saveResults();
      console.log(results);
  })

  return (
    <div>
      <NewResult onAddDeck={addResultHandler} items={props.items} />
      <TableResults items={results} onRemoveResult={removeResultHandler} />
    </div>
  );
}

export default Results;