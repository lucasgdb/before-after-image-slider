import { useState, useRef } from "react";
import { Image } from "./Image";

type Props = {
  beforeImageUrl: string;
  afterImageUrl: string;
};

const BeforeAfterSlider = ({ beforeImageUrl, afterImageUrl }: Props) => {
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(50); // Initial offset is 50% of the width
  const sliderRef = useRef<HTMLDivElement>(null);

  const startDragging = () => {
    setDragging(true);
  };

  const stopDragging = () => {
    setDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;

    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const rect = slider.getBoundingClientRect();

    const offsetX = ((event.clientX - rect.left) / rect.width) * 100;

    if (offsetX < 0) {
      setOffsetX(0);
    } else if (offsetX > 100) {
      setOffsetX(100);
    } else {
      setOffsetX(offsetX);
    }
  };

  return (
    <div>
      <div className="relative w-[1200px] h-[600px] overflow-hidden">
        <div
          className="relative w-full h-full cursor-ew-resize"
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseDown={startDragging}
        >
          <Image src={beforeImageUrl} alt="Before" className="z-[1]" />

          <Image
            src={afterImageUrl}
            alt="After"
            className="z-[2]"
            style={{
              clipPath: `polygon(0 0, ${offsetX}% 0, ${offsetX}% 100%, 0 100%)`,
            }}
          />

          <div
            className="absolute top-0 w-1 h-full bg-white border-2 border-solid border-black -translate-x-1/2 z-[3] cursor-ew-resize"
            style={{ left: `${offsetX}%` }}
          />
        </div>
      </div>

      <p>{Math.ceil(offsetX)}%</p>
    </div>
  );
};

export default BeforeAfterSlider;
