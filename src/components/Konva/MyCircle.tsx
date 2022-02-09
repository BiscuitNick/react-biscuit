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
  handleDrag?: any;
}

const MyCircle = (props: CircleProps) => {
  const { x, y, radius, fill, stroke } = props;
  const circleSpring = useSpring(props);

  return (
    <animated.Circle
      {...circleSpring}
      onClick={props.handleClick}
      draggable={props.draggable}
      canvasRef={props.canvasRef}
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrag}
    />
  );
};

export default MyCircle;
