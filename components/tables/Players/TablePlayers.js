import React from "react";
import PlayerItem from "./PlayerItem";

import "./TablePlayers.css";

function TablePlayers(props) {
    console.log(props);

    // props.onSavePlayers();
    

  return (
    <ul>
      {props.items.map((player) => (
        <PlayerItem key={player.id} player={player.player} id={player.id} />
      ))}
    </ul>
  );
}

export default TablePlayers;
