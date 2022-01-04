import React, { useState } from 'react';

import './Navigation.css';

import ranking from '../img/icon_back_white.png';
import addPlayer from '../img/icon_playerPlus_white.png';
import addDeck from '../img/icon_deckPlus_white.png';
import addResult from '../img/icon_resultPlus_white.png';

function Navigation() {

    const [statusRanking, setStatusRanking] = useState('active');
    const [statusAddPlayer, setStatusAddPlayer] = useState('inactive');
    const [statusAddDeck, setStatusAddDeck] = useState('inactive');
    const [statusAddResult, setStatusAddResult] = useState('inactive');

    const rankingClickHandler = () => {
        console.log("ranking");
        setStatusRanking('active');
        setStatusAddPlayer('inactive');
        setStatusAddDeck('inactive');
        setStatusAddResult('inactive');
    }

    const addPlayerClickHandler = () => {
        console.log("addPlayer");
        setStatusRanking('inactive');
        setStatusAddPlayer('active');
        setStatusAddDeck('inactive');
        setStatusAddResult('inactive');
    }

    const addDeckClickHandler = () => {
        console.log("addDeck");
        setStatusRanking('inactive');
        setStatusAddPlayer('inactive');
        setStatusAddDeck('active');
        setStatusAddResult('inactive');
    }

    const addResultClickHandler = () => {
        console.log("addResult");
        setStatusRanking('inactive');
        setStatusAddPlayer('inactive');
        setStatusAddDeck('inactive');
        setStatusAddResult('active');
    }

    return (
      <span id="navigation">
        <img src={ranking} alt="Ranking" id="img-ranking" className={statusRanking} onClick={rankingClickHandler}/>
        <img src={addPlayer} alt="Add Player" id="img-add-player" className={statusAddPlayer} onClick={addPlayerClickHandler} />
        <img src={addDeck} alt="Add Deck" id="img-add-deck" className={statusAddDeck} onClick={addDeckClickHandler} />
        <img src={addResult} alt="Add Result" id="img-add-result" className={statusAddResult} onClick={addResultClickHandler} />
      </span>
    );
}

export default Navigation;

