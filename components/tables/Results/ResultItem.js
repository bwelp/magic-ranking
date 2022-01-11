import React from "react";

const ResultItem = (props) => {
  const removeResultClickHandler = (event) => {
    props.onRemoveResult(event.target.attributes.result.value);
  };

  return (
    <tr>
      <td>{props.gameDate}</td>
      <td>{props.gameRound}</td>
      <td>{props.gameLocation}</td>
      <td>
        <ol>
          {props.players.map((player, index) => (
            <li>
              `${player} (${props.decks[index]})`
            </li>
          ))}
        </ol>
      </td>
      <td>
        <button
          type="click"
          onClick={removeResultClickHandler}
          result={props.gameId}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ResultItem;
