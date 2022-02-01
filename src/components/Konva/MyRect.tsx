import React, { useRef } from "react";
const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const Konva = require("react-konva");
const { Rect } = Konva;

export interface RectProps {
  handleClick: any;
  width: number;
  height: number;
  x: number;
  y: number;
  rotation?: number;
  fill: string;
  stroke?: string;
  draggable?: boolean;

  canvasRef?: object;
}

const MyRect = (props: RectProps) => {
  const { handleClick, draggable } = props;
  const { width, height, fill, x, y, stroke } = useSpring(props);
  return (
    <animated.Rect
      //   {...animatedProps}
      width={width}
      height={height}
      fill={fill}
      x={x}
      y={y}
      stroke={stroke}
      onClick={handleClick}
      draggable={draggable}
      canvasRef={props.canvasRef}
    />
  );
};

export default MyRect;
