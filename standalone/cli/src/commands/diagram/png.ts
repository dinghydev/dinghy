import { existsSync } from "@std/fs/exists";
import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { reactiacAppHome } from "../../utils/loadConfig.ts";
import { streamCmd } from "../../utils/cmd.ts";
import Debug from "debug";
const debug = Debug("diagram:png");

const options: CommandOptions = {
  collect: ["file"],
  string: ["drawio-bin", "output"],
  description: {
    file: "Path to the drawio file",
    "drawio-bin": "Path to the drawio binary",
    output: "Path to the lookup drawio files if file not provided",
  },
  default: {
    output: "output",
  },
  alias: {
    f: "file",
  },
  cmdDescription: "Generate png from drawio file",
};
const run = async (context: CommandContext, args: CommandArgs) => {
  if (!args["drawio-bin"] && Deno.build.os !== "darwin") {
    throw new Error(`${Deno.build.os} is not supported`);
  }

  if (!args.output.startsWith("/")) {
    args.output = `${reactiacAppHome}/${args.output}`;
  }

  const drawioBin = args["drawio-bin"] ||
    "/Applications/draw.io.app/Contents/MacOS/draw.io";
  if (!existsSync(drawioBin)) {
    throw new Error(
      `${drawioBin} does not exist, you get from https://get.diagrams.net/`,
    );
  }

  const files: string[] = [];
  const file = args.file;
  if (!file && existsSync(args.output)) {
    const dir = await Deno.readDir(args.output);
    for await (const entry of dir) {
      if (entry.isFile && entry.name.endsWith(".drawio")) {
        files.push(`${args.output}/${entry.name}`);
      }
    }
  }
  if (!files.length) {
    throw new Error("No drawio files found");
  }
  await Promise.allSettled(
    files.map(async (file) => {
      const pngFile = file.replace(".drawio", ".png");
      debug(`generating from ${file}`);
      await streamCmd([
        drawioBin,
        "-x",
        "-f",
        "png",
        "--scale",
        "2.5",
        "-o",
        pngFile,
        file,
      ]);
      debug(`generated -> ${pngFile}`);
    }),
  ).then((results) => {
    results.forEach((result) => {
      if (result.status === "rejected") {
        throw result.reason;
      }
    });
  });
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
