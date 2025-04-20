import type { CommandOptions } from "../../types.ts";

import { deepMerge } from "jsr:@std/collections/deep-merge";
import { hostAppHome, reactiacAppConfig } from "../../utils/loadConfig.ts";
import { parseStacks } from "../../utils/stackUtils.ts";
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

export const tfOptionsPlanFile: CommandOptions = {
  string: ["plan-file"],
  description: {
    "plan-file": "Plan file name",
  },
  default: {
    "plan-file": "tf.plan",
  },
};

export const createTfOptions = (options: any) => {
  return deepMerge(tfOptions as any, options) as unknown as CommandOptions;
};

export const parseTfOptions = (options: any) => {
  const stacks =
    parseStacks("app", reactiacAppConfig.stacks, options.stack).stacks;
  const stack = options.stack
    ? stacks[options.stack]
    : Object.values(stacks)[0];

  const stackInfo = JSON.parse(Deno.readTextFileSync(
    `${hostAppHome}/${options.output}/${stack.id}-stack-info.json`,
  ));
  let stage: any = options.stage
    ? Object.values(stack.stages || {}).find(
      (s: any) => s.name === options.stage,
    )
    : Object.values(stack.stages || {})[0];
  if (!stage) {
    stage = {
      id: `${stack.id}-${options.stage}`,
      name: options.stage,
    };
    (stack.stages || {})[options.stage] = stage;
  }
  const stagePath = `${options.output}/${stage.id}`;
  const tfVersion = stackInfo.tfImageVersion || "tf";

  return {
    stackInfo,
    stage,
    stagePath,
    tfVersion,
  };
};
