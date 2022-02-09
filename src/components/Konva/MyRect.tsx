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
  handleDrag?: any;

  canvasRef?: object;
}

const MyRect = (props: RectProps) => {
  const { handleClick, draggable } = props;
  const { x, y, width, height, fill, stroke, rotation, offsetX, offsetY } =
    props;
  const springProps = useSpring({
    x,
    y,
    width,
    height,
    fill,
    stroke,
    rotation,
    offsetX,
    offsetY,
  });
  return (
    <animated.Rect
      {...springProps}
      onClick={handleClick}
      draggable={draggable}
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrag}
    />
  );
};

export default MyRect;
