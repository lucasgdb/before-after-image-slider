export function cx(...classNames: (string | boolean | undefined)[]) {
  return classNames.filter(Boolean).join(" ");
}
