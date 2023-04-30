import fs from "fs";
import path from "path";

export interface TSNoderOptions {
  options: {
    [key in CLIFlagValue]: string | boolean | number;
  };
  script: string;
}

type CLIOptions = { [x: string]: string | boolean | number };
type CLIFlagValue = "project" | "noEmit" | "outDir" | "ignore" | "version";
type CLIFlags =
  | "--project"
  | "-p"
  | "--noEmit"
  | "-ne"
  | "--outDir"
  | "-od"
  | "--ignore"
  | "-i"
  | "--version"
  | "-v";

const existsSync = fs.existsSync || (path as any).existsSync;

const cliFlags = {
  "--project": "project",
  "-p": "project",
  "--noEmit": "noEmit",
  "-ne": "noEmit",
  "--outDir": "outDir",
  "-od": "outDir",
  "--ignore": "ignore",
  "-i": "ignore",
  "--version": "version",
  "-v": "version",
};

/**
 *
 * @param value
 * @param options
 * @param next
 */
function optionBuilder(value: string, options: CLIOptions, next: string) {
  const name = optionName(value as CLIFlags);
  if (name) options[name] = optionValue(next);
}

/**
 *
 * @param value
 * @returns
 */
function optionName(value: CLIFlags): string | null {
  return cliFlags[value] ?? null;
}

/**
 *
 * @param value
 * @returns
 */
function optionValue(value: string) {
  // Check value if a boolean
  if (value === "true" || value === "false") {
    return value === "true";
  }

  // Check value if a number
  if (!isNaN(Number(value))) {
    return Number(value);
  }

  // Return a string as default
  // Remove single or double quote
  return value.replace(/[\'\"]/gi, "");
}

/**
 *
 * @param argv
 * @returns
 */
export default function (argv: string[]) {
  const args = argv.slice(2);
  const options: CLIOptions = {};
  let script: string | null = null;

  args.forEach((arg, index) => {
    // Check if arg has a file extension
    // Only do the check if script is null
    if (!script && arg.includes(".")) {
      script = existsSync(arg) ? arg : null;
      return;
    }

    // Check if arg is a flag
    if (arg.includes("--") || arg.includes("-")) {
      optionBuilder(arg, options, args[index + 1]);
    }
  });

  return { options, script };
}
