import React from "react";

import './ResultItem.css';

const ResultItem = (props) => {
  const removeResultClickHandler = (event) => {
    props.onRemoveResult(event.target.attributes.gameid.value);
  };

  

  // <tr>
  //     <td>{outputDate()}</td>
  //     <td>{props.gameRound}</td>
  //     <td>{props.gameLocation}</td>
  //     <td>
  //       <ol>
  //         {props.players.map((player, index) => (
  //           <li key={player}>
  //             {player} ({props.decks[index]})
  //           </li>
  //         ))}
  //       </ol>
  //     </td>
  //     <td>
  //       <button
  //         type="click"
  //         onClick={removeResultClickHandler}
  //         gameid={props.gameId}
  //       >
  //         X
  //       </button>
  //     </td>
  //   </tr>

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
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ResultItem;
