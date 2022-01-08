import React, { useState, useEffect } from "react";

import NewPlayer from "../../forms/NewPlayer/NewPlayer";
import TablePlayers from "./TablePlayers";

function Players(props) {
  const [players, setPlayers] = useState([]);
  const [maxId, setMaxId] = useState(0);
  let playersRestored = false;

  const savePlayers = () => {
    localStorage.setItem("players", JSON.stringify(players));
  };



  const restorePlayers = () => {
    let savedPlayers = localStorage.getItem("players");
    if (savedPlayers !== null && savedPlayers !== []) {
      JSON.parse(savedPlayers).forEach((player) => {
        console.log(player);
        setPlayers((prevPlayers) => {
          return [...prevPlayers, player];
        });
      });
      //   let idArr = [];
      //   players.forEach(player => {
      //     console.log(player.id);
      //     idArr.push(parseInt(player.id));
      //   })
      //   console.log(idArr);
      //   setMaxId(Math.max(idArr));
      playersRestored = true;
    }
  };

  const restoreMaxId = (p) => {
    let idArr = [];
    console.log(p);
    if (p != null) {
      p.forEach((player) => {
        console.log(player.id);
        idArr.push(parseInt(player.id));
      });
      console.log(idArr);
      setMaxId(Math.max(idArr));
    }
  };

  const addPlayerHandler = (player) => {
    setPlayers((prevPlayers) => {
      return [...prevPlayers, player];
    });

    setMaxId(player.id);
  };

  if (players.length === 0) {
    restorePlayers(players);
    // if (playersRestored === true) {
    //   console.log(players);
    //   restoreMaxId();
    //   playersRestored = false;
    // }
  };

  useEffect(() => {
    if (players.length !== 0) {
      savePlayers();
    }
    if (playersRestored === true) {
      console.log(players);
      restoreMaxId(players);
      playersRestored = false;
    }
  });

  return (
    <div>
      <NewPlayer onAddPlayer={addPlayerHandler} maxId={maxId} />
      <TablePlayers items={players} />
    </div>
  );
}

export default Players;
