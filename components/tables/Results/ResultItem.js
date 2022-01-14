import React from "react";

const ResultItem = (props) => {
  const removeResultClickHandler = (event) => {
    props.onRemoveResult(event.target.attributes.gameid.value);
  };

  const outputDate = () => {
    let date = new Date(props.gameDate.substring(0, 4), parseInt(props.gameDate.substring(5, 7)) -1, props.gameDate.substring(8, 10));
    let date_output = date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit" 
    });
    return date_output;
  };

  return (
    <tr>
      <td>{outputDate()}</td>
      <td>{props.gameRound}</td>
      <td>{props.gameLocation}</td>
      <td>
        <ol>
          {props.players.map((player, index) => (
            <li key={player}>
              {player} ({props.decks[index]})
            </li>
          ))}
        </ol>
      </td>
      <td>
        <button
          type="click"
          onClick={removeResultClickHandler}
          gameid={props.gameId}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ResultItem;
