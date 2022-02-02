import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Board,
  MyRect,
  MyCircle,
  MyImage,
  Eye,
} from "@biscuitnick/react-biscuit";
import { useRef } from "react";

const getStageData = (canvasRef: any) => {
  if (!canvasRef) {
    return null;
  }
  if (!canvasRef.current) return null;
  else {
    const stageData = canvasRef.current.getStage();
    return stageData;
  }
};

const handleClick = (e: { target: { attrs: any } }) => {
  console.log(e.target.attrs);
};

function App() {
  const [xy, set] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<any>(null);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const outerSize = Math.min(height, width) * 0.05;
  const innerSize = outerSize / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  const rectProps = {
    width: width / 2,
    height: height / 2,
    fill: "pink",
    x: xy.x - width / 4,
    y: xy.y - height / 4,
    handleClick,
    draggable: true,
  };

  const imageProps = {
    x: centerX, // + width / 4,
    y: centerY, //+ height / 4,
    width: width / 2,
    height: height / 2,
    offsetX: width / 4,
    offsetY: height / 4,

    rotation: 45,

    handleClick,

    src: "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1639218364/tc-uploads/1200px-Earth_Western_Hemisphere_transparent_background.png",
    draggable: false,
  };

  useEffect(() => {
    const followCursor = setInterval(() => {
      const stageData = getStageData(canvasRef);
      if (!stageData) return null;
      else {
        const cursorXY = stageData.getPointerPosition();
        set(cursorXY ? cursorXY : { x: centerX, y: centerY });
      }
    }, 200);

    return () => clearInterval(followCursor);
  }, []);

  const eyeProps = {
    x: centerX - outerSize * 1.5,
    y: centerY,
    width,
    height,

    outerSize,
    outerShape: "Circle",
    outerFill: "white",
    outerStroke: "blue",
    outerRotation: 0,

    innerSize,
    innerShape: "Rect",
    innerFill: "black",
    innerStroke: "green",

    focalPoint: xy,
    disableClip: false,
    sensitivity: 5,
    movementFactor: 1,
    w2h: 1,
    handleClick,
  };

  return (
    <Board
      width={width}
      height={height}
      rectProps={rectProps}
      canvasRef={canvasRef}
    >
      <MyImage {...imageProps} />
      <Eye {...eyeProps} />
      <Eye {...eyeProps} outerShape={"Circle"} x={centerX + outerSize * 1.5} />
    </Board>
  );
}

export default App;

// focalPoint={xy}
// x={width}
// y={height}

// innerProps={{
//   ...innerCircle,
//   ...xy,
// }}
// outerProps={{ ...circleProps, x: 0, y: 0 }}
// handleClick={handleClick}
// x={centerX}
// y={centerY}
// width={width}
// height={height}
// //OuterShape
// outerSize={outerSize}
// outerShape={"Circle"}
// outerFill={"orange"}
// outerStroke={"blue"}
// //InnerShape
// innerSize={innerSize}
// innerShape={"Circle"}
// innerFill={"purple"}
// innerStroke={"black"}
// //
// focalPoint={xy}
// sensitivity={10}
// disableClip={false}
// w2h={1}
// handleClick={handleClick}

// /* <MyCircle {...circleProps} />
// <MyCircle {...innerCircle} /> */
