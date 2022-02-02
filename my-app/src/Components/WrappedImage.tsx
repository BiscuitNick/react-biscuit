// import { MyImage } from "@biscuitnick/react-biscuit";
import { MyImage } from "@biscuitnick/react-biscuit";
import { useEffect } from "react";
import useImage from "use-image";

// Workaround to run useEffect on MyImage
// Get Natural Width / Height for sizing

export interface WrappedImageProps {
  x: number;
  y: number;
  width: number;
  height: number;
  offsetX?: number;
  offsetY?: number;
  src: string;
  canvasRef?: object;
}

export const WrappedImage = (props: WrappedImageProps) => {
  const { x, y, width, height, src, canvasRef } = props;
  const [image] = useImage(src);

  useEffect(() => {
    console.log(image);
  }, [image]);

  return null; //<MyImage {...props} />;
};
