import chalk from "chalk";
import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { hostAppHome } from "../../utils/loadConfig.ts";
import { doWithTfStacks } from "./doWithTfStacks.ts";
import { runTfImageCmd } from "./runTfImageCmd.ts";
import { createTfOptions, parseTfOptions, tfOptionsPlan } from "./tfOptions.ts";
import Debug from "debug";
const debug = Debug("tf:plan");
const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: "Plan changes",
});

const CHANGE_LINE_PREFIX = new Set(["~ ", "+ ", "- ", "id"]);
function collectStageChange(outputFile: string, maxLines: number) {
  const planTxt = Deno.readTextFileSync(outputFile).trim();
  let changesCount = 0;
  let summary: string | undefined;
  const changes: string[] = [];
  if (!planTxt.startsWith("No changes")) {
    const lines = planTxt.split(/\r?\n|\r|\n/g);
    summary = lines.pop()!.split(": ")[1].slice(0, -1).split(",").map((s) => {
      const count = s.trim().split(" ")[0];
      if (count !== "0") {
        changesCount += Number.parseInt(count);
        return s;
      }
    }).filter((s) => s).join(",");
    let started = false;
    for (const line of lines) {
      if (started && line && !line.trim().startsWith("# (")) {
        const trimmedLine = line.trim();
        if (CHANGE_LINE_PREFIX.has(trimmedLine.slice(0, 2))) {
          if (changes.length === maxLines) {
            changes.push("Ignored more output lines:", ".");
          } else if (
            changes.length > maxLines
          ) {
            changes.push(`${changes.pop()}.`);
          } else {
            changes.push(line.slice(2));
          }
        }
      }

      if (line.endsWith("perform the following actions:")) {
        started = true;
      }
    }

    return {
      changesCount,
      summary,
      changes,
    };
  }
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  const changedStages: any[] = [];
  await doWithTfStacks(args, async (tfOptions) => {
    const { stack, stackInfo, stages } = tfOptions;
    const maxLines = Number.parseInt(args["diff-changes-max-lines"]);
    for (const stage of stages) {
      const stagePath = `${args.output}/${stage.id}`;
      debug("Running terraform plan from %s", stagePath);
      await runTfImageCmd(
        stagePath,
        args,
        [
          "terraform",
          "plan",
          `-lock=${args.lock}`,
          `-out=${args["plan-file"]}`,
        ],
      );
      for (const format of ["json", "txt"]) {
        const planOutputFile = `${hostAppHome}/${stagePath}/${
          args["plan-file"]
        }.${format}`;
        debug("Formatting plan file to %s", planOutputFile);
        await runTfImageCmd(
          stagePath,
          args,
          [
            "terraform",
            "show",
            format === "json" ? "-json" : "-no-color",
            args["plan-file"],
            ">",
            planOutputFile,
          ],
        );
        console.log("Formated plan ", planOutputFile);
        if (format === "txt") {
          const changes = collectStageChange(planOutputFile, maxLines);
          stackInfo.stages[stage.id].plan = changes;
          if (changes?.changesCount) {
            changedStages.push(stackInfo.stages[stage.id]);
          }
        }
      }
    }
    const stackInfoFile =
      `${hostAppHome}/${args.output}/${stack.id}-stack-info.json`;
    Deno.writeTextFileSync(stackInfoFile, JSON.stringify(stackInfo, null, 2));
    debug("Update stack info %s", stackInfoFile);
  });
  if (changedStages.length) {
    changedStages.map((change) => {
      console.log(
        chalk.red(`${change.id} changes: ${change.plan.summary}`),
      );
    });
    console.log(
      chalk.red(`Changes found in ${changedStages.length} stages`),
    );
  } else {
    console.log(
      chalk.green(
        `No changes found ${
          args.stack ? `in ${args.stack} stack` : "in any stage"
        }`,
      ),
    );
  }
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
