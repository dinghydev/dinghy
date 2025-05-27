import { existsSync } from "@std/fs/exists";
import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { hostAppHome, isInsideContainer } from "../../utils/loadConfig.ts";
import { streamCmd } from "../../utils/cmd.ts";
import Debug from "debug";
import { resolve } from "@std/path/resolve";
import { runDockerCmd } from "../../utils/dockerUtils.ts";
import { configGetDrawioImage } from "../../utils/dockerConfig.ts";
import chalk from "chalk";
import { runContainerCli } from "../../utils/runContainerCli.ts";
const debug = Debug("diagram:png");

const options: CommandOptions = {
  boolean: ["debug"],
  collect: ["file"],
  string: ["drawio-bin", "output"],
  description: {
    file: "Path to the drawio file",
    "drawio-bin":
      "Path to local drawio binary, e.g. --drawio-bin /Applications/draw.io.app/Contents/MacOS/draw.io",
    output: "Path to the lookup drawio files if file not provided",
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

const runDrawioCmd = async (args: CommandArgs, drawioArgs: string[]) => {
  if (isInsideContainer) {
    return await runDockerCmd(
      hostAppHome,
      [],
      drawioArgs,
      configGetDrawioImage(),
      false,
    );
  }
  if (args["drawio-bin"]) {
    return await streamCmd(
      [
        args["drawio-bin"],
        ...drawioArgs,
      ],
      undefined,
      false,
    );
  }
};

const run = async (context: CommandContext, args: CommandArgs) => {
  if (!isInsideContainer && !args["drawio-bin"]) {
    const result = await runContainerCli(
      context.originalArgs,
      hostAppHome,
      false,
    );
    if (result.failed) {
      throw new Error("Failed to run container cli, see error above");
    }
    return;
  }

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
  let success = false;
  for (const file of files) {
    const pngFile = file.replace(".drawio", ".png");
    debug(`generating from ${file}`);
    const pngResult = await runDrawioCmd(args, [
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
      success = true;
      debug(`generated -> ${pngFile}`);
      results[file] = pngFile;
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
    if (success && !args["drawio-bin"]) {
      console.log(
        chalk.yellow(
          `Likely due to large diagram: https://issues.chromium.org/issues/383356871 .

Use locally installed draw.io to generate png as workaround e.g.:
DIAGRAM_PNG_DRAWIO_BIN=/Applications/draw.io.app/Contents/MacOS/draw.io
          `,
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
