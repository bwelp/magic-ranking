import React from "react";

import './ResultItem.css';

const ResultItem = (props) => {

  const removeResultClickHandler = (event) => {
    props.onRemoveResult(event.target.attributes.resultid.value);
  };

  return (
    <div className="result_item">
      <div className="result_item__round">{`Runde ${props.gameRound}`}</div>
      <div className="result_item__list">
        {props.players.map((player, index) => (
          <div key={player}>
            {`${index + 1}. `} {player} ({props.decks[index]})
          </div>
        ))}
      </div>
      <div>
        <button
          type="click"
          className="result_item__remove_button"
          onClick={removeResultClickHandler}
          gameid={props.gameId}
          resultid={props.id}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ResultItem;
