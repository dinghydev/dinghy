import { existsSync } from "@std/fs/exists";
import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../../../cli/src/types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../../../cli/src/types.ts";
import Debug from "debug";
import { resolve } from "@std/path/resolve";
import chalk from "chalk";
import { runDockerCmd } from "../../../../cli/src/utils/dockerUtils.ts";
import { configGetDrawioImage } from "../../../../cli/src/utils/dockerConfig.ts";
import { hostAppHome } from "../../../../cli/src/utils/loadConfig.ts";
const debug = Debug("diagram:png");

const options: CommandOptions = {
  boolean: ["debug", "delete-after-success"],
  collect: ["file"],
  string: ["drawio-bin", "output"],
  description: {
    file: "Path to the drawio file",
    "drawio-bin":
      "Path to local drawio binary, e.g. --drawio-bin /Applications/draw.io.app/Contents/MacOS/draw.io",
    output: "Path to the lookup drawio files if file not provided",
    "delete-after-success":
      "Delete the drawio file after successful generation",
  },
  alias: {
    f: "file",
  },
  arguments: {
    stack: {
      description: "Stack name or tsx file name",
      required: false,
    },
  },
  cmdDescription: "Generate png from drawio file",
};

const runDrawioCmd = async (
  _args: CommandArgs,
  drawioImage: string,
  drawioArgs: string[],
) => {
  return await runDockerCmd(
    hostAppHome,
    {},
    [],
    drawioArgs,
    drawioImage,
    false,
  );
};

const run = async (_context: CommandContext, args: CommandArgs) => {
  if (!args.output.startsWith("/")) {
    args.output = resolve(`${hostAppHome}/${args.output}`);
  }

  const files: string[] = [];
  const file = args.file;
  if (file) {
    for (const f of file) {
      if (f.startsWith("/")) {
        files.push(f);
      } else {
        files.push(resolve(`${args.output}/${f}`));
      }
    }
  } else if (existsSync(args.output)) {
    const dir = await Deno.readDir(args.output);
    for await (const entry of dir) {
      if (entry.isFile && entry.name.endsWith(".drawio")) {
        if (!args.stack || entry.name.includes(args.stack)) {
          files.push(`${args.output}/${entry.name}`);
        }
      }
    }
  }
  if (!files.length) {
    throw new Error("No drawio files found");
  }
  const results = {};
  let failed = false;
  let hasSuccess = false;
  const drawioImage = configGetDrawioImage();
  for (const file of files) {
    const pngFile = file.replace(".drawio", ".png");
    debug(`generating from ${file}`);
    const pngResult = await runDrawioCmd(args, drawioImage, [
      "-x",
      "-f",
      "png",
      "--scale",
      "2.5",
      "-o",
      pngFile,
      file,
    ]);
    if (pngResult!.all?.includes("Export failed")) {
      results[file] = "FAILED";
      failed = true;
    } else {
      hasSuccess = true;
      debug(`generated -> ${pngFile}`);
      results[file] = pngFile;
      if (args["delete-after-success"]) {
        await Deno.remove(file);
        debug(`deleted ${file}`);
      }
    }
  }
  console.log("Generated png files:");
  Object.entries(results)
    .map(([file, pngFile]) => {
      if (pngFile === "FAILED") {
        console.log(chalk.red(`${file} -> ${pngFile}`));
      } else {
        console.log(chalk.green(`${file} -> ${pngFile}`));
      }
    });
  if (failed) {
    if (hasSuccess) {
      console.log(
        chalk.yellow(
          `Likely due to large diagram: https://issues.chromium.org/issues/383356871 .`,
          // Use locally installed draw.io to generate png as workaround e.g.:
          // DIAGRAM_PNG_DRAWIO_BIN=/Applications/draw.io.app/Contents/MacOS/draw.io
          // `,
        ),
      );
    }
    throw new Error("Failed to generate png");
  }
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
