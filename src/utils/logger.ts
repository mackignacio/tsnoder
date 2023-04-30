import { color, ColorCodes, colorCoding } from "./color";

const APP_NAME = "tsnoder";

/**
 *
 * @param type
 * @param text
 * @returns
 */
function log(type: ColorCodes, text: string) {
  const message = color(colorCoding[type], `[${APP_NAME}] ${text || ""}`);

  //   process.nextTick(() => {
  //     bus.emit("log", { type, message });
  //   });

  if (type === "error") {
    console.error(message);
    return;
  }

  console.log(message || "");
}

export default class Logger {
  info(text: string) {
    log("info", text);
  }

  status(text: string) {
    log("status", text);
  }

  message(text: string) {
    log("message", text);
  }

  fail(text: string) {
    log("fail", text);
  }

  error(text: string) {
    log("error", text);
  }
}
