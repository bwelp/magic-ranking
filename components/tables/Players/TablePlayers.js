import React from "react";
import PlayerItem from "./PlayerItem";

import "./TablePlayers.css";

function TablePlayers(props) {

    const removePlayerHandler = (player) => {
      props.onRemovePlayer(player);
    }
    

  return (
    <div id="table_players__container">
      {props.players.map((player) => (
        <PlayerItem key={player.player} player={player.player} onRemovePlayer={removePlayerHandler} />
      ))}
    </div>
  );
}

export default TablePlayers;
