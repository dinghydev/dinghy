import { triggerAutoDeployJobs } from './gitUtils.ts'
import {
  githubHandlePendingChanges,
  githubResolveIssue,
} from './githubUtils.ts'
export const triggerCiChangesApplied = async (
  _changedStacks: any[],
  _args: any,
) => {
  const githubIssueNumber = Deno.env.get('GITHUB_ISSUE_NUMBER')
  if (githubIssueNumber) {
    await githubResolveIssue(githubIssueNumber)
  }
}
export const triggerCiChangesDetected = async (
  changedStacks: any[],
  args: any,
) => {
  if (Deno.env.get('CI_PIPELINE_ID')) {
    await triggerAutoDeployJobs(changedStacks, args)
  } else {
    await githubHandlePendingChanges(changedStacks, args)
  }
}
