import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import init from './init.ts'
import plan from './plan.ts'
import apply from './apply.ts'
// import generate from "./generate/index.ts";
import normalise from './normalise.ts'
import diff from './diff.ts'
import { showHelp } from '@dinghy/cli'
import up from './up.ts'
import bash from './bash.ts'
import deploy from './deploy.ts'
const options: CommandOptions = {
  description: {},
  cmdDescription: 'Terraform/OpenTofu related operations',
}
const run = (context: CommandContext, _args: CommandArgs) => {
  showHelp(context)
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  init,
  plan,
  apply,
  // generate,
  normalise,
  diff,
  deploy,
  up,
  bash,
}

export default commands
