import React from "react";
const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const Konva = require("react-konva");
const { Circle } = Konva;

export interface CircleProps {
  //Position
  x: number;
  y: number;

  //Size
  radius: number;

  //Style
  fill?: string;
  stroke?: string;

  //Interactions
  canvasRef?: object;
  draggable?: boolean;
  handleClick?: any;
}

const MyCircle = (props: CircleProps) => {
  const { x, y } = useSpring({ x: props.x, y: props.y });

  return (
    <animated.Circle
      x={x}
      y={y}
      radius={props.radius}
      fill={props.fill}
      stroke={props.stroke}
      onClick={props.handleClick}
      draggable={props.draggable}
      canvasRef={props.canvasRef}
    />
  );
};

export default MyCircle;
