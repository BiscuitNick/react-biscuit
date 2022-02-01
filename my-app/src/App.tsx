import "./App.css";
import {
  Button,
  Board,
  MyRect,
  MyCircle,
  MyImage,
} from "@biscuitnick/react-biscuit";
import { useRef } from "react";
import useImage from "use-image";
import { WrappedImage } from "./Components/WrappedImage";

function App() {
  const canvasRef = useRef<any>(null);
  const [image] = useImage(
    "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1639218364/tc-uploads/1200px-Earth_Western_Hemisphere_transparent_background.png"
  );

  const width = window.innerWidth;
  const height = window.innerHeight;
  const rectProps = {
    width: width / 2,
    height: height / 2,
    fill: "pink",
    x: 500, //width / 4, pink
    y: height / 4,
    handleClick: (e: { target: { attrs: any } }) =>
      console.log(canvasRef.current, e.target.attrs),
    draggable: true,
  };
  const circleProps = {
    x: width / 2,
    y: height / 2,
    radius: Math.min(height, width) / 4,

    fill: "brown",
    stroke: "black",

    handleClick: () => {
      if (!canvasRef) {
        return null;
      }
      if (!canvasRef.current) return null;
      else {
        let stageData = canvasRef.current.getStage();
        console.log(stageData);
      }
    },
    draggable: true,
  };

  const imageProps = {
    x: width / 2,
    y: height / 2,
    width: width / 2,
    height: height / 2,
    src: "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1639218364/tc-uploads/1200px-Earth_Western_Hemisphere_transparent_background.png",

    //radius: Math.min(height, width) / 4,
    // image,
    handleClick: () => {
      if (!canvasRef) {
        return null;
      }
      if (!canvasRef.current) return null;
      else {
        let stageData = canvasRef.current.getStage();
        console.log(stageData);
      }
    },
    draggable: true,
  };

  return (
    <div className="App">
      <Board
        width={width}
        height={height}
        rectProps={rectProps}
        canvasRef={canvasRef}
      >
        <MyRect {...rectProps} canvasRef={canvasRef} />
        <MyCircle {...circleProps} canvasRef={canvasRef} />
        {/* <WrappedImage {...imageProps} canvasRef={canvasRef} /> */}

        <MyImage {...imageProps} canvasRef={canvasRef} />

        {/* <WrappedImage
          {...imageProps}
          src={
            "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1639218364/tc-uploads/1200px-Earth_Western_Hemisphere_transparent_background.png"
          }
          canvasRef={canvasRef}
        /> */}
      </Board>
    </div>
  );
}

export default App;
