import React from "react";
import { default as MyRect, RectProps } from "./MyRect";
import { default as MyCircle, CircleProps } from "./MyCircle";

const Konva = require("react-konva");
const { Group } = Konva;

export interface EyeProps {
  //Element Position
  x: number;
  y: number;

  //Board Width/Height
  width: number;
  height: number;

  w2h?: number;

  outerSize: number;
  outerShape: string;
  outerFill?: string;
  outerStroke?: string;
  outerRotation?: number;

  innerSize: number;
  innerShape: string;
  innerFill?: string;
  innerStroke?: string;
  innerRotation?: number;

  //Animation & Events
  focalPoint: any;
  sensitivity: number;
  movementFactor: number;
  disableClip?: boolean;
  handleClick?: any;
}

const Eye = (props: EyeProps) => {
  const {
    x,
    y,
    width,
    height,
    outerSize,
    outerShape,
    outerFill,
    outerStroke,
    outerRotation,

    innerSize,
    innerShape,
    innerFill,
    innerStroke,
    innerRotation,

    focalPoint,
    disableClip,
    sensitivity,
    movementFactor, //InnerShape movement distance // OuterSize*MovmentFactor ==> MovmentRange
    w2h,
    handleClick,
  } = props;

  const getInnerPosition = () => {
    const xDelta = focalPoint.x - x;
    const yDelta = focalPoint.y - y;

    const movmentRange = outerSize * movementFactor;

    const xDistance = (xDelta / width) * sensitivity * movmentRange;
    const yDistance = (yDelta / height) * sensitivity * movmentRange;

    const innerX =
      xDistance > movmentRange
        ? movmentRange
        : xDistance < -movmentRange
        ? -movmentRange
        : xDistance;

    const innerY =
      yDistance > movmentRange
        ? movmentRange
        : yDistance < -movmentRange
        ? -movmentRange
        : yDistance;
    return { x: innerX, y: innerY };
  };

  const innerXY = getInnerPosition();

  const groupProps = {
    x: x, //outerShape === "Rect" ? x - outerSize : x, //+ outerSize,
    y: y, //outerShape === "Rect" ? y - outerSize : y, // + outerSize,
    offsetX: 0, //outerShape === "Rect" ? outerSize : 0,
    offsetY: 0, //outerShape === "Rect" ? outerSize : 0,
    onClick: handleClick,
    clipFunc: disableClip
      ? null
      : outerShape === "Circle"
      ? (ctx: any) => ctx.arc(0, 0, outerSize, 0, Math.PI * 2)
      : outerShape === "Rect"
      ? (ctx: any) =>
          ctx.rect(-outerSize, -outerSize, outerSize * 2, outerSize * 2)
      : null, //ToDo Add Clip Function for Rect Shape.
  };

  const BigShape =
    outerShape === "Circle" ? (
      <MyCircle
        x={0}
        y={0}
        radius={outerSize}
        fill={outerFill}
        stroke={outerStroke}
      />
    ) : outerShape === "Rect" ? (
      <MyRect
        x={0}
        y={0}
        width={outerSize * 2}
        height={outerSize * 2}
        offsetX={outerSize}
        offsetY={outerSize}
        fill={outerFill}
        stroke={outerStroke}
      />
    ) : null;

  const SmallShape =
    innerShape === "Circle" ? (
      <MyCircle
        x={innerXY.x}
        y={innerXY.y}
        radius={innerSize}
        fill={innerFill}
        stroke={innerStroke}
      />
    ) : innerShape === "Rect" ? (
      <MyRect
        width={innerSize * 2}
        height={innerSize * 2}
        x={innerXY.x}
        y={innerXY.y}
        offsetX={innerSize}
        offsetY={innerSize}
        fill={innerFill}
        stroke={innerStroke}
      />
    ) : null;

  return (
    <Group {...groupProps}>
      {BigShape}
      {SmallShape}
    </Group>
  );
};

export default Eye;
