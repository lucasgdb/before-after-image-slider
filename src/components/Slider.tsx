import { clsx } from "clsx";
import { Direction } from "../types/types";
import { LeftArrow } from "./icons/LeftArrow";
import { RightArrow } from "./icons/RightArrow";
import { UpArrow } from "./icons/UpArrow";
import { DownArrow } from "./icons/DownArrow";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  direction: Direction;
  isDragging: boolean;
};

export function Slider({ direction, isDragging, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(
        "absolute z-[3] bg-transparent select-none touch-none",
        !isDragging ? "transition-all" : undefined,
        direction === "horizontal"
          ? "top-0 -translate-x-1/2 w-9 h-full"
          : "left-0 -translate-y-1/2 h-9 w-full",
        props.className
      )}
    >
      <div
        className={clsx(
          "absolute bg-white shadow-dark z-[3] select-none",
          direction === "horizontal"
            ? "top-0 left-1/2 -translate-x-1/2 w-1.5 h-full cursor-ew-resize"
            : "left-0 top-1/2 -translate-y-1/2 h-1.5 w-full cursor-ns-resize",
          props.className
        )}
      >
        <div className="relative w-full h-full">
          {direction === "horizontal" ? (
            <LeftArrow className="absolute top-1/2 -translate-y-1/2 -left-6" />
          ) : (
            <UpArrow className="absolute left-1/2 -translate-x-1/2 -top-6" />
          )}

          {direction === "horizontal" ? (
            <RightArrow className="absolute top-1/2 -translate-y-1/2 -left-0.5" />
          ) : (
            <DownArrow className="absolute left-1/2 -translate-x-1/2 -top-0.5" />
          )}
        </div>
      </div>
    </div>
  );
}
