import React from "react";

import star1 from '../../../img/star1_grey.png';
import star2 from '../../../img/star2.png';
import star3 from '../../../img/star3_grey.png';


const RankItem = (props) => {

  const includeStars = () => {
    switch (props.rank) {
      case 1: return <img src={star1} className="star" alt="1" />;
      case 2: return <img src={star2} className="star" alt="2" />;
      case 3: return <img src={star3} className="star" alt="3" />;
      default: return <div>{props.rank}</div>;
    }
  }
  
  return (
    <tr>
      <td>{includeStars()}</td>
      <td>{props.player}</td>
      <td>{props.numberOfWins}</td>
      <td>{props.winRate} %</td>
    </tr>
  );
};

export default RankItem;
