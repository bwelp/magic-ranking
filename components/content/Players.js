import React, { useState, useEffect } from "react";

import NewPlayer from "../forms/NewPlayer/NewPlayer";
import TablePlayers from "../tables/Players/TablePlayers";

function Players(props) {
  const restorePlayers = (props) => {
    let savedPlayers = localStorage.getItem("players");
    if (savedPlayers !== null && savedPlayers !== []) {
      let restoredPlayers = [];
      JSON.parse(savedPlayers).forEach((player) => {
        restoredPlayers.push(player);
      });
      return restoredPlayers;
    } 
    else {
      return [];
    }
  };

  const [players, setPlayers] = useState(() => {
    return restorePlayers();
  });
  
  const savePlayers = () => {
    localStorage.setItem("players", JSON.stringify(players));
  };

  function addPlayerHandler(player) {
    setPlayers(function(prevPlayers) {
      return [...prevPlayers, player];
    });
  };

  function removePlayerHandler(playerName) {
    console.log(players);
    setPlayers(function(prevPlayers) {
      console.log(prevPlayers);
      let index = -1;
      for (let i = 0; i < prevPlayers.length; i++) {
        if (prevPlayers[i].player === playerName) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        prevPlayers.splice(index, 1);
      }
      return [...prevPlayers];
    });
  };

  console.log(players);

  // if (players.length === 0) {
  //   restorePlayers(players);
  // };

  useEffect(() => {
    // if (players.length !== 0) {
      savePlayers();
      props.onRelayPlayers(players);
      console.log(players);
    // }
  });

  return (
    <div>
      <NewPlayer onAddPlayer={addPlayerHandler} />
      <TablePlayers items={players} onRemovePlayer={removePlayerHandler} />
    </div>
  );
}

export default Players;
