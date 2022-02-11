import React from 'react';

import './PlayerItem.css';

const PlayerItem = (props) => {
    console.log(props);

    const removePlayerClickHandler = (event) => {
        props.onRemovePlayer(event.target.attributes.player.value);
    }

    return <div className="player_item">
        <div className="player_item__player">
            {props.player}</div>
        <button className="player_item__remove_button" type="click" onClick={removePlayerClickHandler} player={props.player}>X</button>
    </div>
};

export default PlayerItem;