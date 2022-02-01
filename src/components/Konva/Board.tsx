import React, { useRef } from "react";
// import * as Konva from "konva";
const Konva = require("react-konva");
const { Stage } = Konva;
// import { Canvas } from "canvas";

export interface BoardProps {
  width: number;
  height: number;
}

const Board = (props: BoardProps) => {
  return <Stage width={props.width} height={props.height}></Stage>;
};

export default Board;
