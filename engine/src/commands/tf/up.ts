import { createCombinedTfCmds } from "./tf-combined-cmds.ts";

export default createCombinedTfCmds(
  "Create or update the resources in selected targets",
  ["init", "plan", "apply"],
);
