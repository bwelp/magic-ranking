

const PlayerItem = (props) => {
    console.log(props);

    return <li>
        {`${props.player}, ${parseInt(props.id)}`}
    </li>
};

export default PlayerItem;