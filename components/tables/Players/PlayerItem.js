import React from 'react';

import './PlayerItem.css';

const PlayerItem = (props) => {

    const removePlayerClickHandler = (event) => {
        props.onRemovePlayer(event.target.attributes.player.value);
    }

     const playerItemClickHandler = (event) => {
        props.onOpenStatistic(event.target.attributes.playername.value);
    };

    return <div className="player_item" onClick={playerItemClickHandler} playername={props.player}>
        <div className="player_item__player" playername={props.player}>
            {props.player}</div>
        <button className="player_item__remove_button" type="click" onClick={removePlayerClickHandler} player={props.player} playername="">X</button>
    </div>
};

export default PlayerItem;