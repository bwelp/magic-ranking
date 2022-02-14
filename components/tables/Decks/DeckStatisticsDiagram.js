import React, { useRef, useEffect, useCallback } from "react";

import "./DeckStatisticsDiagram.css";

const DeckStatisticsDiagram = (props) => {
  const { diagramData } = props;

  const canvasRef = useRef(null);
  console.log(canvasRef);

  let canvasWidth = 500;
  let canvasHeight = 130; 

  // const RankDiagram = () => {
  //   let diagramData = { values: [
  //     {label: "1. Platz", size: props.deckStatistic.numOfPlace1, color: "#FF2400"},
  //     {label: "2. Platz", size: props.deckStatistic.numOfPlace2, color: "#FEFE33"},
  //     {label: "3. Platz", size: props.deckStatistic.numOfPlace3, color: "#00FF00"},
  //     {label: "4. Platz", size: props.deckStatistic.numOfPlace4, color: "#0000FF"}
  //   ]};

  //   let canvas = document.getElementById("active_deck__rank_diagramm");

  //   let canvasWidth = 200;
  //   let canvasHeight = 200;
  //   canvas.setAttribute('width', canvasWidth);
  //   canvas.setAttribute('height', canvasHeight);
  //   let cv = canvas.getContext("2d");

  //   let graphMax = 20;
  //   let graphPadding = 10;
  //   let graphFactor = (canvasHeight - (2 * graphPadding)) / graphMax;
  //   let graphWidth = (canvasWidth - graphPadding) / diagramData.values.length;
  //   let graphTextcolor = '#000000';
    
  //   for (let i= 0; i < diagramData.values.length; i++) {
  //     tmpTop = (canvasHeight - (graphFactor * diagramData.values.size)).toFixed() - graphPadding;
  //     tmpHeight = (diagramData.values.size * graphFactor).toFixed();
  //     cv.fillStyle = diagramData.values.color;
  //     cv.fillRect(graphWidth + ((i - 1) * graphWidth) + graphPadding, tmpTop, graphWidth - graphPadding, tmpHeight);
  //     cv.fillStyle = graphTextcolor;
  //     cv.fillText(diagramData.values.label, graphWidth + ((i - 1) * graphWidth) + graphPadding + 2, canvasHeight - 2, graphWidth);
  //   }

  // };

  const draw = useCallback((ctx) => {
    let x = 90;
    let yBase = 10;
    let yPlus = 30;
    let barHeight = 20;
    let lengthMultiplier = 40;
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = "#000000";
      ctx.font = '16px "Noto Sans JP"';
      ctx.fillText(diagramData[i].label, 10, 25 + (30 * i));
    }
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = diagramData[i].color;
      ctx.fillRect(x, yBase + yPlus * i, 1 + lengthMultiplier * diagramData[i].size, barHeight);
      ctx.fillText(diagramData[i].size, x + 1 + lengthMultiplier * diagramData[i].size + 10, 25 + (30 * i));
    }

    console.log("Hallo");
  }, [diagramData]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    draw(context);
  }, [draw, canvasWidth, canvasHeight]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default DeckStatisticsDiagram;
