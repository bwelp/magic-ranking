import React from 'react';

import './Headline.css';

function Headline(props) {

    const headline = props.items.headline;
    console.log(headline);

    return (
        <h1>{headline}</h1>
    )
}

export default Headline;