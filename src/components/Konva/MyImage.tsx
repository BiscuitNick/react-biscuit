import React from "react";
import { useEffect } from "react";
// import useImage from "use-image";

const useImage = require("use-image");
const Konva = require("react-konva");
const { Image } = Konva;

export interface ImageProps {
  //Size & Position
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;

  src: string;
  //   image?: object;

  //Interactions
  canvasRef?: object;
  draggable?: boolean;
  handleClick?: any;
}

const MyImage = (props: ImageProps) => {
  const [image, status] = useImage(props.src);

  if (status === "loading") {
    console.log(status, image);
  }
  if (status === "loaded") {
    //Apply Resizing after loaded.
    //We can again skip Wrapper...

    console.log(status, image.naturalWidth, image.naturalHeight);
  }
  //   useEffect(() => {
  //     console.log(image);
  //   }, [image]);

  return (
    <Image
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      onClick={props?.handleClick}
      draggable={props?.draggable}
      canvasRef={props?.canvasRef}
      image={image}
    />
  );
};

export default MyImage;
