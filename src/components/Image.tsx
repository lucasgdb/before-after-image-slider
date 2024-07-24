import { clsx } from "clsx";

export function Image(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <img
      {...props}
      className={clsx(
        "absolute top-0 left-0 w-full h-full select-none",
        props.className
      )}
    />
  );
}
