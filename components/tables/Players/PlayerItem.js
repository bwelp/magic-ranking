import React from 'react';

const PlayerItem = (props) => {
    console.log(props);

    const removePlayerClickHandler = (event) => {
        console.log(event);
        console.log(event.target.attributes.player.value);
        props.onRemovePlayer(event.target.attributes.player.value);
    }

    return <li>
        {props.player}
        <button type="click" onClick={removePlayerClickHandler} player={props.player}>X</button>
    </li>
};

export default PlayerItem;