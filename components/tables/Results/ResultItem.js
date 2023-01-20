import React from "react";

import "./ResultItem.css";

import star from "../../../img/star_lightgray.png";
import change from "../../../img/change_gray.png";
import deleteX from "../../../img/delete_gray_2.png";

const ResultItem = (props) => {

  const removeResultClickHandler = (event) => {
    if(window.confirm("Soll dieses Ergebnis wirklichh gelöscht werden?") === true) {
      props.onRemoveResult(event.target.attributes.resultid.value);
    }
  };

  const changeResultClickHandler = (event) => {
    console.log("Change Deck");
    //props.onChangeResult(event.target.attributes.reusltid.value);
  };

  // <div>
  //       {props.players.map((player, index) => (
  //         <div key={player}>
  //           {props.decks[index]}
  //         </div>
  //       ))}
  //     </div>
  //     <div>
  //       {props.players.map((player, index) => (
  //         <div key={player}>
  //           {props.deckEvals[index]}
  //         </div>
  //       ))}
  //     </div>

  // <div className="result_item__list_player">
  //             {`${index + 1}. `} {player}
  //           </div>

  return (
    <div className="result_item">
      <div className="result_item__round">{`Runde ${props.gameRound}`}</div>
      <div className="result_item__list">
        {props.players.map((player, index) => (
          <div className="result_item__list_content" key={player}>
            <div className="result_item__list_place"> {props.places[index]}{". "}</div>
            <div className="result_item__list_player"> {player} </div>
            <div className="result_item__list_deck">{props.decks[index]}</div>
            <div className="result_item__list_power">
              <img src={star} alt="S" className="result_item__img" />{" "}
              {parseInt(props.deckEvals[index]) === 0 ? "" : props.deckEvals[index]}</div>
          </div>
        ))}
      </div>
      <div>
        <img
          src={change} 
          alt="C"
          className="result_item__button"
          onClick={changeResultClickHandler}
          gameid={props.gameId}
          resultid={props.id}
        />
      </div>
      <div>
        <img
          src={deleteX}
          alt="X"
          className="result_item__button"
          onClick={removeResultClickHandler}
          gameid={props.gameId}
          resultid={props.id}
        />
      </div>
    </div>
  );
};

export default ResultItem;
