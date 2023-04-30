import { TSNoderOptions } from "./cli/parser";
import { spawn, ChildProcess } from "node:child_process";
import path from "path";

let child: ChildProcess | null = null;

const IS_OS_WINDOWS = process.platform === "win32";

function tsnoder(options: TSNoderOptions) {
  const cwd = process.cwd();
  const binPath = cwd + "/node_modules/.bin";
  const stdio = [process.stdin, process.stdout, process.stderr];
  const spawnOptions = {
    env: Object.assign({}, process.env, {
      PATH: binPath + path.delimiter + process.env.PATH,
    }),
    stdio: stdio,
    windowsVerbatimArguments: true,
    windowsHide: true,
  };

  let scriptDir = path.resolve(`${cwd}/${options.script}`);

  if (IS_OS_WINDOWS) {
    scriptDir = scriptDir
      .split(" ")
      .map((e, i) => {
        if (i === 0) {
          return path.normalize(e);
        }
        return e;
      })
      .join(" ");
  }
  const script = `ts-node ${scriptDir}`;
  const sh = process.env.comspec || "cmd";
  const shFlag = "/d /s /c";
  const args = [shFlag, script];

  if (!child) {
    child = spawn(sh, args, spawnOptions);
  }

  child.on("exit", () => {
    console.log("Script exited");
  });
}

module.exports = tsnoder;
