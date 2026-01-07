import Debug from 'debug'
import { triggerAutoDeployJobs } from './gitUtils.ts'
import { githubOutputPath } from '@dinghy/cli'
import { Octokit } from '@octokit/core'
const debug = Debug('ciUtils')
export const triggerCiChangesApplied = async (
  changedStacks: any[],
  args: any,
) => {
  if (Deno.env.get('GITHUB_ISSUE_NUMBER')) {
    //todo: resolve github issue
    console.log('changedStacks', changedStacks)
    await console.log('args', args)
  }
}
export const triggerCiChangesDetected = async (
  changedStacks: any[],
  args: any,
) => {
  const githubOutput = githubOutputPath()
  if (githubOutput) {
    const pendingChanges = 'pending_changes=true\n'
    debug('append to %s with %s', githubOutput, pendingChanges)
    Deno.writeTextFileSync(githubOutput, pendingChanges, {
      append: true,
    })
    if (Deno.env.get('GITHUB_CREATE_DEPLOY_ISSUE') == 'true') {
      //todo: create deploy issue
      const octokit = new Octokit({ auth: Deno.env.get('GITHUB_TOKEN') })
      // const response = await octokit.request(
      //   'POST /repos/{owner}/{repo}/issues',
      //   {
      //     owner: 'dinghydev',
      //     repo: 'dinghy',
      //     title: 'Deploy',
      //     body: 'Deploy changes',
      //   },
      // )
      console.log('octokit', octokit)
    }
  } else if (Deno.env.get('CI_PIPELINE_ID')) {
    await triggerAutoDeployJobs(changedStacks, args)
  }
}
