import React, { useState } from 'react';

import './NewPlayer.css';
import FormAddPlayer from './FormAddPlayer';

const NewPlayer = (props) => {
    const[isEditing, setIsEditing] = useState(false);

  const savePlayerDataHandler = (enteredPlayerData) => {
    const playerData = {
      ...enteredPlayerData,
      id: parseInt(props.maxId) + 1
    };

    props.onAddPlayer(playerData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-player">
      {!isEditing && (
        <button onClick={startEditingHandler}>Spieler hinzufügen</button>
      )}
      {isEditing && (
        <FormAddPlayer
          onSavePlayerData={savePlayerDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewPlayer;