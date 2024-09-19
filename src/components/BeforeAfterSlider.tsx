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

  const drag = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const rect = slider.getBoundingClientRect();

    if (direction === "horizontal") {
      const offsetX = ((clientX - rect.left) / rect.width) * 100;

      if (offsetX <= 0.5) {
        setPosition(0.5);
      } else if (offsetX >= 99.5) {
        setPosition(99.5);
      } else {
        setPosition(offsetX);
      }
    } else {
      const offsetY = ((clientY - rect.top) / rect.height) * 100;

      if (offsetY < 0.5) {
        setPosition(0.5);
      } else if (offsetY > 99.5) {
        setPosition(99.5);
      } else {
        setPosition(offsetY);
      }
    }
  };

  const dragMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    drag({ clientX: event.clientX, clientY: event.clientY });
  };

  const dragTouching = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    drag({ clientX: touch.clientX, clientY: touch.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    dragMouse(event);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    dragTouching(event);
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    drag(event);
  };

  return (
    <div className="flex justify-center">
      <Container width={width} height={height}>
        <div
          ref={sliderRef}
          className="relative w-full h-full overflow-hidden"
          onClick={handleMouseClick}
          onMouseUp={stopDragging}
          onMouseMove={handleMouseMove}
          onMouseDown={startDragging}
        >
          <Image
            image={beforeImageUrl}
            alignment={beforeTextAlignment}
            text="Before"
            className="z-[2]"
            size={position}
            direction={direction}
            isDragging={isDragging}
          />

          <Image
            image={afterImageUrl}
            alignment={afterTextAlignment}
            text="After"
            className="z-[1]"
            direction={direction}
            isDragging={isDragging}
          />

          <Slider
            onTouchStart={startDragging}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDragging}
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
    </div>
  );
};

export default BeforeAfterSlider;
