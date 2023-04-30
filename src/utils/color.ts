export type ColorCodes =
  | "info"
  | "data"
  | "status"
  | "message"
  | "fail"
  | "error";
export type ColorNames = "red" | "yellow" | "green" | "black" | "blue";

type Colors = { [key in ColorNames]: string };
type ColorCodings = { [key in ColorCodes]: ColorNames };

/**
 *
 * @param color
 * @param text
 * @returns
 */
function color(color: ColorNames, text: string) {
  return (colors[color] || colors.black) + text + colors.black;
}

const colors: Colors = {
  red: "\x1B[31m",
  yellow: "\x1B[33m",
  green: "\x1B[32m",
  black: "\x1B[39m",
  blue: "\x1B[34m",
};

const colorCoding: ColorCodings = {
  data: "blue",
  info: "yellow",
  status: "green",
  message: "black",
  fail: "red",
  error: "red",
};

export { color, colors, colorCoding };
