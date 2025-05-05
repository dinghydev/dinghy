import type { CommandOptions } from "../../types.ts";

import { mergician } from "mergician";
import { hostAppHome, reactiacAppConfig } from "../../utils/loadConfig.ts";
import { parseStack } from "../../utils/stackUtils.ts";
export const tfOptions: CommandOptions = {
  collect: ["tf-options"],
  description: {
    "tf-options": "Additional tf options",
  },
  arguments: {
    stack: {
      description: "Stack name",
      required: false,
    },
    stage: {
      description: "Stage name",
      required: false,
    },
  },
};

export const tfOptionsPlan: CommandOptions = {
  string: ["plan-file", "diff-changes-max-lines"],
  boolean: ["lock"],
  description: {
    "plan-file": "Plan file name",
    "diff-changes-max-lines": "Max lines of diff changes",
    lock: "Lock the state during plan",
  },
  default: {
    "plan-file": "tf.plan",
    "diff-changes-max-lines": "10",
  },
};

export const createTfOptions = (options: any) => {
  return mergician(tfOptions, options) as CommandOptions;
};

export const parseTfOptions = (options: any) => {
  const stack = parseStack(options.stack || "app", reactiacAppConfig);

  const stackInfo = JSON.parse(Deno.readTextFileSync(
    `${hostAppHome}/${options.output}/${stack.id}-stack-info.json`,
  ));
  const stages: any[] = [];
  if (options.stage) {
    let stage: any = Object.values(stack.stages || {}).find(
      (s: any) => s.name === options.stage,
    );
    if (!stage) {
      stage = {
        id: `${stack.id}-${options.stage}`,
        name: options.stage,
      };
      console.warn(`Stage not found, creating ondemand stage ${stage.id}`);
    }
    stages.push(stage);
  } else {
    stages.push(...Object.values(stack.stages || {}));
  }
  const tfVersion = stackInfo.tfImageVersion || "tf";

  return {
    stack,
    stackInfo,
    stages,
    tfVersion,
  };
};
