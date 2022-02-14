import React from "react";

import "./TableRanking.css";
import RankItem from './RankItem';



const TableRanking = (props) => {


  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  //   console.log("Expense.js");
  //   console.log(selectedYear);
  // };

  // const filteredExpenses = props.items.filter(expense => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  function rankPlayers() {
    let numberOfWins = [];

    let filteredResults;
    if (props.filteredYear === "") {
      filteredResults = props.results;
    } else {
      filteredResults = props.results.filter((result) => {
        return result.gameDate.substr(0, 4) === props.filteredYear;
      });
    }

    console.log(filteredResults); ////////////////

    if (
      props.players !== null &&
      props.players !== [] &&
      filteredResults !== null &&
      filteredResults !== []
    ) {
      props.players.forEach((player) => {
        let numWins = 0;
        let numSecondPlace = 0;
        let numRounds = 0;
        filteredResults.forEach((result) => {
          if (result.players[0] === player.player) {
            numWins += 1;
          }
          if (result.players[1] === player.player) {
            numSecondPlace += 1;
          }
          result.players.forEach((p) => {
            if (p === player.player) {
              numRounds += 1;
            }
          });
        });
        numberOfWins.push({
          player: player.player,
          wins: numWins,
          secondPlace: numSecondPlace,
          rounds: numRounds,
        });
      });
    }
    sortPlayers(numberOfWins);

    return numberOfWins;
  }

  function sortPlayers(numberOfWins) {
    numberOfWins.sort(function (a, b) {
      if (a.wins < b.wins) {
        return 1;
      } else if (a.wins > b.wins) {
        return -1;
      } else {
        if (a.wins / a.rounds < b.wins / b.rounds) {
          return 1;
        } else if (a.wins / a.rounds > b.wins / b.rounds) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }

  console.log(rankPlayers());

  return (
    <div id="ranking-container">
      <table id="ranking-table">
        <thead>
          <tr id="ranking-headrow">
            <th>Platz</th>
            <th>Spieler</th>
            <th>Siege</th>
            <th>Siegrate</th>
          </tr>
        </thead>
        <tbody>
          {rankPlayers().map((numWin, index) => (
            <RankItem
              key={numWin.player}
              rank={index + 1}
              player={numWin.player}
              numberOfWins={numWin.wins}
              winRate={numWin.rounds > 0 ? Math.round((numWin.wins / numWin.rounds) * 100) : 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRanking;
