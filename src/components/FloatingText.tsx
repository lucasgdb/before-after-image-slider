import { clsx } from "clsx";
import { Alignment } from "../types/types";

type Props = {
  text: string;
  alignment: Alignment;
};

export function FloatingText({ text, alignment }: Props) {
  return (
    <div
      className={clsx(
        "absolute p-2 bg-black bg-opacity-70 shadow rounded-md select-none",
        alignment === "left" ? "left-2 top-1/2 -translate-y-1/2" : null,
        alignment === "right" ? "right-2 top-1/2 -translate-y-1/2" : null,
        alignment === "top" ? "top-2 left-1/2 -translate-x-1/2" : null,
        alignment === "bottom" ? "bottom-2 left-1/2 -translate-x-1/2" : null,
        alignment === "left-top" ? "left-2 top-2" : null,
        alignment === "left-bottom" ? "left-2 bottom-2" : null,
        alignment === "right-top" ? "right-2 top-2" : null,
        alignment === "right-bottom" ? "right-2 bottom-2" : null
      )}
    >
      <p className="font-normal text-sm text-white">{text}</p>
    </div>
  );
}
