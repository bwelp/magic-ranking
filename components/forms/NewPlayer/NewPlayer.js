import React from 'react';

import FormAddPlayer from './FormAddPlayer';

const NewPlayer = (props) => {

  const savePlayerDataHandler = (enteredPlayerData) => {
    const playerData = {
      ...enteredPlayerData
    };

    props.onAddPlayer(playerData);
    props.onStopAdding(false);
  };

  const stopEditingHandler = () => {
    props.onStopAdding(false);
  }

  return (
    <div className="new-player">
      {props.addPlayerActive && (
        <FormAddPlayer
          onSavePlayerData={savePlayerDataHandler}
          onCancel={stopEditingHandler}
          players={props.players}
        />
      )}
    </div>
  );
};

export default NewPlayer;