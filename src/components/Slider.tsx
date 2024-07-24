import { clsx } from "clsx";
import { Direction } from "../types/types";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  direction: Direction;
  dragging: boolean;
};

export function Slider({ direction, dragging, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(
        "absolute bg-white shadow-dark z-[3] select-none",
        !dragging ? "transition-all" : undefined,
        direction === "horizontal"
          ? "top-0 -translate-x-1/2 w-1.5 h-full cursor-ew-resize"
          : "left-0 -translate-y-1/2 h-1.5 w-full cursor-ns-resize",
        props.className
      )}
    />
  );
}
