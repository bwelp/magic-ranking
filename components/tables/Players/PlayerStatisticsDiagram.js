import React, { useRef, useEffect, useCallback } from "react";

const PlayerStatisticsDiagram = (props) => {
    console.log(props);
  const { diagramData } = props;
  console.log(diagramData);

  const canvasRef = useRef(null);
  console.log(canvasRef);

  let canvasWidth = 500;
  let canvasHeight = 130; 

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

export default PlayerStatisticsDiagram;