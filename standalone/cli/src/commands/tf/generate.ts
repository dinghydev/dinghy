import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { runWorkspaceTask } from "../../utils/runWorkspaceTask.ts";

const options: CommandOptions = {
  string: ["state-json-file", "app-tsx-file"],
  required: ["state-json-file"],
  description: {
    "state-json-file": "Path to the terraform state json file",
    "app-tsx-file":
      "Path to the generated App.tsx file, if not provided, the generated code will be printed to the console",
  },
  alias: {
    f: "state-json-file",
  },
  cmdDescription: "Generate App.tsx from terraform state json output",
  cmdAlias: ["generate-app-from-state"],
};

const run = async (_context: CommandContext, _args: CommandArgs) => {
  await runWorkspaceTask(["tf-generate", ...Deno.args]);
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
