import React, { useState } from "react";

import "./Content.css";
import NewPlayer from "./forms/NewPlayer/NewPlayer";
import TablePlayers from "./tables/Players/TablePlayers";
import FormAddDeck from "./forms/NewDeck/FormAddDeck";
import FormAddResult from "./forms/NewResult/FormAddResult";
import Blank from "./tables/Blank";

function Content(props) {
  const [players, setPlayers] = useState([]);
  const [maxId, setMaxId] = useState(0);

 
  const savePlayersHandler = () => {
    localStorage.setItem("players", JSON.stringify(players));
  };

  const restorePlayers = () => {
    let savedPlayers = localStorage.getItem("players");
    if (savedPlayers !== null) {
      JSON.parse(savedPlayers).forEach((player) => {
        console.log(player);
        setPlayers((prevPlayers) => {
          return [...prevPlayers, player];
        });
      });
    }
  };

  const addPlayerHandler = (player) => {
    setPlayers((prevPlayers) => {
      return [...prevPlayers, player];
    });

    setMaxId(player.id);
    console.log(players);
    // savePlayers();
  };



  if (players.length === 0) {
    restorePlayers();
    console.log(players);
  }


  
  const chooseContent = () => {
    switch (props.items) {
      case "addPlayer":
        return (
          <div>
            <NewPlayer onAddPlayer={addPlayerHandler} onSavePlayers={savePlayersHandler} maxId={maxId} />
            <TablePlayers items={players} />
          </div>
        );
      case "addDeck":
        return <FormAddDeck />;
      case "addResult":
        return <FormAddResult />;
      default:
        return <Blank />;
    }
  };

  return <div>{chooseContent()}</div>;
}

export default Content;
