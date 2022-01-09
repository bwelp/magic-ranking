import React, { useState, useEffect } from "react";

import NewPlayer from "../../forms/NewPlayer/NewPlayer";
import TablePlayers from "./TablePlayers";

function Players(props) {
  const [players, setPlayers] = useState([]);
  
  const savePlayers = () => {
    localStorage.setItem("players", JSON.stringify(players));
  };

  const restorePlayers = () => {
    let savedPlayers = localStorage.getItem("players");
    if (savedPlayers !== null && savedPlayers !== []) {
      JSON.parse(savedPlayers).forEach((player) => {
        setPlayers((prevPlayers) => {
          return [...prevPlayers, player];
        });
      });
    }
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


  // function removePlayerHandler(playerName)  {
  //   let index = -1;
  //   for (let i = 0; i < players.length; i++) {
  //     if (players[i].player === playerName) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   console.log(index);
  //   if (index !== -1) {
  //     let playersCopy = players;
  //     console.log(playersCopy);
  //     playersCopy.splice(index, 1);
  //     console.log(playersCopy);
  //     setPlayers(function(playersCopy) {
  //       return (playersCopy);
  //     });
  //     console.log(players);
  //     // setPlayers(function(players) {
  //     //   console.log(players);
  //     //   players.splice(index, 1);
  //     //   console.log(players);
  //     //   return (players);
  //     // });
  //   }
  // };

  // if (players.length === 0) {
  //   restorePlayers(players);
  // };

  // useEffect(() => {
  //   if (players.length !== 0) {
  //     savePlayers();
  //   }
  // });

  return (
    <div>
      <NewPlayer onAddPlayer={addPlayerHandler} />
      <TablePlayers items={players} onRemovePlayer={removePlayerHandler} />
    </div>
  );
}

export default Players;
