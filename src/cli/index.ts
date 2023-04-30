import parser from "./parser";
import argsBuilder from "./argsBuilder";

/**
 *
 * @param args
 * @returns
 */
function parse(args: string | string[]): any {
  if (typeof args === "string") {
    args = argsBuilder(args);
  }

  return parser(args);
}

module.exports = { parse };
