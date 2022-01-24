import React from "react";

const RankItem = (props) => {
  
  return (
    <tr>
      <td>{props.rank}</td>
      <td>{props.player}</td>
      <td>{props.numberOfWins}</td>
      <td>{props.winRate} %</td>
    </tr>
  );
};

export default RankItem;
