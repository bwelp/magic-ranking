import React from "react";
import PlayerItem from "./PlayerItem";

import "./TablePlayers.css";

function TablePlayers(props) {
    console.log(props);

    const removePlayerHandler = (player) => {
      props.onRemovePlayer(player);
    }
    

  return (
    <ul>
      {props.items.map((player) => (
        <PlayerItem key={player.player} player={player.player} onRemovePlayer={removePlayerHandler} />
      ))}
    </ul>
  );
}

export default TablePlayers;
