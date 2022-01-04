import React from 'react';

import './FormAddDeck.css';
import FormAddCommander from './FormAddCommander';

import white from '../../img/white.jpg';
import blue from '../../img/blue.jpg';
import black from '../../img/black.jpg';
import red from '../../img/red.jpg';
import green from '../../img/green.jpg';
import colorless from '../../img/colorless.jpg';

const FormAddDeck = () => {
  return (
    <div>
        <FormAddCommander />
        <div id="table">
        </div>
        <form id="add-deck" action="#" method="get">
            <div>
                <label htmlFor="deckname">Name des Decks </label>
                <input type="text" id="deckname" name="deckname" form="add-deck" /> 
            </div>
            
            <div>
                <label htmlFor="player">Name des Spielers </label>
                <select id="player" name="player" form="add-deck">
                    
                </select> 
            </div>
            <div>
                <input type="hidden" id="commander1" name="commander1" form="add-deck" value="undefined" />
            </div>
            <div>
                <input type="hidden" id="commander2" name="commander2" form="add-deck" value="undefined" />
            </div>
            <div>
                <label htmlFor="colors">Farben </label><br />
                <input type="checkbox" id="white" form="add-deck" name="colors" value="white" /><img src={white} alt="weiss" className="img-color" />
                <input type="checkbox" id="blue" form="add-deck" name="colors" value="blue" /><img src={blue} alt="blau" className="img-color" />
                <input type="checkbox" id="black" form="add-deck" name="colors" value="black" /><img src={black} alt="schwarz" className="img-color" />
                <input type="checkbox" id="red" form="add-deck" name="colors" value="red" /><img src={red} alt="rot" className="img-color" />
                <input type="checkbox" id="green" form="add-deck" name="colors" value="green" /><img src={green} alt="gruen" className="img-color" />
                <input type="checkbox" id="colorless" form="add-deck" name="colors" value="colorless" /><img src={colorless} alt="farblos" className="img-color" />
            </div>
            <div>
                <button type="submit" form="add-deck">Deck hinzufügen</button>
            </div>
        </form>
    </div>
  );
};

export default FormAddDeck;