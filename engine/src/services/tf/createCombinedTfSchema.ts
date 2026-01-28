import type { CmdInput } from '@dinghy/cli'
import { stackArgs } from '../../commands/tf/index.ts'

export const createCombinedTfSchema = (
  description: string,
  cmds: string[] = [],
): CmdInput => {
  const options = []
  if (cmds.includes('init')) {
    options.push({
      name: 'auto-create-backend',
      description: "Auto create backend bucket if it doesn't exist",
      boolean: true,
      env: 'DINGHY_TF_INIT_AUTO_CREATE_BACKEND',
    })
  }
  if (cmds.includes('plan') || cmds.includes('apply')) {
    options.push({
      name: 'diff-changes-max-lines',
      description: 'Max lines of diff changes',
      string: true,
      default: '10',
    })
    options.push({
      name: 'lock',
      description: 'Lock the state during plan',
      boolean: true,
      default: cmds.includes('apply'),
    })
  }
  return {
    description,
    options,
    ...stackArgs,
  }
}
