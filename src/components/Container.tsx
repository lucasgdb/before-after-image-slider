import { clsx } from "clsx";
import { useIsMobile } from "../hooks/useIsMobile";

type Props = {
  width: number;
  height: number;
  children: React.ReactNode;
};

export function Container({ width, height, children }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      style={isMobile ? { width } : { width, height }}
      className={clsx(
        "relative overflow-hidden",
        isMobile ? "aspect-square" : undefined
      )}
    >
      {children}
    </div>
  );
}
