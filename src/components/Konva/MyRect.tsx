import React from "react";
const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const Konva = require("react-konva");
const { Rect } = Konva;

export interface RectProps {
  width: number;
  height: number;
  x: number;
  y: number;
  offsetX?: number;
  offsetY?: number;

  fill?: string;
  stroke?: string;
  rotation?: number;
  draggable?: boolean;
  handleClick?: any;
  canvasRef?: object;
}

const MyRect = (props: RectProps) => {
  const { handleClick, draggable } = props;
  const { x, y, width, height, fill, stroke, rotation } = useSpring(props);
  return (
    <animated.Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      rotation={rotation}
      offsetX={props.offsetX}
      offsetY={props.offsetY}
      onClick={handleClick}
      draggable={draggable}
    />
  );
};

export default MyRect;
