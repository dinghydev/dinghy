export const mrId = () => Deno.env.get('CI_MERGE_REQUEST_IID')

export const isCi = () => Deno.env.get('CI') === 'true'
export const isMr = () => mrId() !== undefined
export const jobName = () =>
  Deno.env.get('CI_JOB_NAME') || `dinghy ${Deno.args.join(' ')}`

export const githubOutputPath = () => Deno.env.get('GITHUB_OUTPUT')
