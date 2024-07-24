import { useState, useRef } from "react";
import { Image } from "./Image";
import { Slider } from "./Slider";
import { Alignment, Direction } from "../types/types";
import { Container } from "./Container";

type Props = {
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeTextAlignment?: Alignment;
  afterTextAlignment?: Alignment;
  width?: number;
  height?: number;
  direction?: Direction;
};

const BeforeAfterSlider = ({
  beforeImageUrl,
  afterImageUrl,
  beforeTextAlignment = "left-bottom",
  afterTextAlignment = "right-bottom",
  width = 600,
  height = 600,
  direction = "horizontal",
}: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(50); // Initial offset is 50%

  const startDragging = () => {
    setIsDragging(true);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const drag = (event: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const rect = slider.getBoundingClientRect();

    if (direction === "horizontal") {
      const offsetX = ((event.clientX - rect.left) / rect.width) * 100;

      if (offsetX < 0) {
        setPosition(0);
      } else if (offsetX > 100) {
        setPosition(100);
      } else {
        setPosition(offsetX);
      }
    } else {
      const offsetY = ((event.clientY - rect.top) / rect.height) * 100;

      if (offsetY < 0) {
        setPosition(0);
      } else if (offsetY > 100) {
        setPosition(100);
      } else {
        setPosition(offsetY);
      }
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    drag(event);
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    drag(event);
  };

  return (
    <Container width={width} height={height}>
      <div
        className="relative w-full h-full overflow-hidden"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onClick={handleMouseClick}
        onMouseUp={stopDragging}
        onMouseDown={startDragging}
      >
        <Image
          image={beforeImageUrl}
          alignment={beforeTextAlignment}
          text="Antes"
          className="z-[2]"
          size={position}
          direction={direction}
          isDragging={isDragging}
        />

        <Image
          image={afterImageUrl}
          alignment={afterTextAlignment}
          text="Depois"
          className="z-[1]"
          direction={direction}
          isDragging={isDragging}
        />

        <Slider
          direction={direction}
          isDragging={isDragging}
          style={
            direction === "horizontal"
              ? { left: `${position}%` }
              : { top: `${position}%` }
          }
        />
      </div>
    </Container>
  );
};

export default BeforeAfterSlider;
