import React from "react";
import PlayerItem from "./PlayerItem";

import "./TablePlayers.css";

function TablePlayers(props) {
  
  return (
    <div id="table_players__container">
      {props.players !== null && props.players.map((player) => (
        <PlayerItem
          key={player.player}
          player={player.player}
          id={player.id}
          onRemovePlayer={props.onRemovePlayer}
          onOpenStatistic={props.onOpenPlayerStatistic}
        />
      ))}
    </div>
  );
}

export default TablePlayers;
