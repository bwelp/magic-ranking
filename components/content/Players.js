import React, { useState } from "react";

import './Players.css';

import NewPlayer from "../forms/NewPlayer/NewPlayer";
import TablePlayers from "../tables/Players/TablePlayers";

function Players(props) {
  const [addPlayerBoxActive, setAddPlayerBoxActive] = useState(false);

  const playerPlusButtonClickHandler = (event) => {
    setAddPlayerBoxActive(true);
  };

  const stopAddingPlayerHandler = () => {
    setAddPlayerBoxActive(false);
  };
 
  return (
    <div>
      <div className="headline_container">
        <div className="headline">Spieler </div>
        {!addPlayerBoxActive && (
          <button
            type="button"
            id="player_plus_button"
            onClick={playerPlusButtonClickHandler}
          >
            +
          </button>
        )}
      </div>
      <div id="player_container">
        <TablePlayers players={props.players} onRemovePlayer={props.onRemovePlayer} />
        <NewPlayer players={props.players} onAddPlayer={props.onAddPlayer} addPlayerActive={addPlayerBoxActive} onStopAdding={stopAddingPlayerHandler} />
      </div>
    </div>
  );
}

export default Players;
