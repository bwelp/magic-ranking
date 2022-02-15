import React from "react";
import PlayerItem from "./PlayerItem";

import "./TablePlayers.css";

function TablePlayers(props) {
  const removePlayerHandler = (player) => {
    props.onRemovePlayer(player);
  };

  console.log(props.players);

  return (
    <div id="table_players__container">
      {props.players !== null && props.players.map((player) => (
        <PlayerItem
          key={player.player}
          player={player.player}
          onRemovePlayer={removePlayerHandler}
          onOpenStatistic={props.onOpenPlayerStatistic}
        />
      ))}
    </div>
  );
}

export default TablePlayers;
