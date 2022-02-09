import React from "react";
const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const useImage = require("use-image");
const Konva = require("react-konva");
const { Image } = Konva;

export interface ImageProps {
  //Size & Position
  x: number;
  y: number;
  width: number;
  height: number;
  offsetX?: number;
  offsetY?: number;

  preserveAspect?: boolean;
  rotation?: number;
  src: string;

  //Interactions
  canvasRef?: object;
  draggable?: boolean;
  handleClick?: any;
  handleDrag?: any;
}

const MyImage = (props: ImageProps) => {
  const [image, status] = useImage(props.src);
  const { x, y, width, height, rotation, offsetX, offsetY } = props;
  const imageSpring = useSpring(props);
  //const {x,y,width,height} = props;

  // if (status === "loading") {
  //   console.log(status, image);
  // }
  // if (status === "loaded") {
  //   //Apply Resizing after loaded.
  //   //We can again skip Wrapper...
  //   console.log(status, image.naturalWidth, image.naturalHeight);
  // }

  return (
    <animated.Image
      {...imageSpring}
      // x={props.x}
      // y={props.y}
      // width={props.width}
      // height={props.height}
      // offsetX={props.offsetX}
      // offsetY={props.offsetY}
      // rotation={props.rotation}
      onClick={props?.handleClick}
      draggable={props?.draggable}
      canvasRef={props?.canvasRef}
      image={image}
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrag}
    />
  );
};

export default MyImage;
