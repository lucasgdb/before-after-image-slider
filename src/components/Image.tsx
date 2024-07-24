import { clsx } from "clsx";
import { FloatingText } from "./FloatingText";
import { Alignment, Direction } from "../types/types";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  image: string;
  text: string;
  alignment: Alignment;
  size?: number;
  direction: Direction;
  dragging: boolean;
};

export function Image({
  image,
  text,
  alignment,
  size = 100,
  direction,
  dragging,
  ...props
}: Props) {
  return (
    <div
      {...props}
      style={{
        clipPath:
          direction === "horizontal"
            ? `polygon(0 0, ${size}% 0, ${size}% 100%, 0 100%)`
            : `polygon(0 0, 100% 0, 100% ${size}%, 0 ${size}%)`,
      }}
      className={clsx(
        "absolute top-0 left-0 w-full h-full overflow-hidden select-none pointer-events-none rounded-md",
        !dragging ? "transition-all" : undefined,
        props.className
      )}
    >
      <img
        src={image}
        className="absolute top-0 left-0 w-full h-full select-none pointer-events-none"
      />

      <FloatingText text={text} alignment={alignment} />
    </div>
  );
}
