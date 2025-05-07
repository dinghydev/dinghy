import { existsSync } from "@std/fs/exists";
import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { containerAppHome } from "../../utils/loadConfig.ts";
import { streamCmd } from "../../utils/cmd.ts";
import Debug from "debug";
import { resolve } from "@std/path/resolve";
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
    console.error(`${Deno.build.os} is not supported`);
    Deno.exit(1);
  }

  if (!args.output.startsWith("/")) {
    args.output = resolve(`${containerAppHome}/${args.output}`);
  }

  const drawioBin = args["drawio-bin"] ||
    "/Applications/draw.io.app/Contents/MacOS/draw.io";
  if (!existsSync(drawioBin)) {
    console.error(
      `${drawioBin} does not exist, you get from https://get.diagrams.net/`,
    );
    Deno.exit(1);
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
        files.push(`${args.output}/${entry.name}`);
      }
    }
  }
  if (!files.length) {
    console.error("No drawio files found");
    Deno.exit(1);
  }
  await Promise.allSettled(
    files.map(async (file: string) => {
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
    let failed = false;
    results.map((result, i) => {
      if (result.status === "rejected") {
        console.error(`Failed to generate png ${files[i]}: ${result.reason}`);
        failed = true;
      }
    });
    if (failed) {
      console.error("Failed to generate png");
      Deno.exit(1);
    }
  });
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
