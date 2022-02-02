import React, { useEffect, useRef, useState } from "react";
import { default as MyRect, RectProps } from "./MyRect";
import { default as MyCircle, CircleProps } from "./MyCircle";
import { default as MyImage, ImageProps } from "./MyImage";

const Konva = require("react-konva");
const { Stage, Layer } = Konva;

const getStageData = (canvasRef: any) => {
  if (!canvasRef) {
    return null;
  }
  if (!canvasRef.current) return null;
  else {
    const stageData = canvasRef.current.getStage();
    return stageData;
  }
};

export interface BoardProps {
  width: number;
  height: number;

  canvasRef?: object;
  children?: any;
  rectProps?: RectProps;
}

const Board = (props: BoardProps) => {
  return (
    <Stage width={props.width} height={props.height}>
      <Layer ref={props.canvasRef}>{props.children}</Layer>
    </Stage>
  );
};

export default Board;
