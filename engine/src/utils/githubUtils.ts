import Debug from 'debug'
import { containerAppHome } from '@dinghy/cli'
import { Octokit } from '@octokit/core'
import ejs from 'ejs'
import * as yaml from '@std/yaml'
import { existsSync } from '@std/fs/exists'

const debug = Debug('githubUtils')

const octokit = () =>
  new Octokit({
    auth: Deno.env.get('GH_TOKEN'),
  })

export const githubResolveIssue = async (
  githubIssueNumber: string,
) => {
  await (octokit().request(
    `POST /repos/${
      Deno.env.get('GITHUB_REPOSITORY')
    }/issues/${githubIssueNumber}/comments`,
    {
      body: `Changes applied from [${
        Deno.env.get('GITHUB_WORKFLOW')
      }](https://github.com/${Deno.env.get('GITHUB_REPOSITORY')}/actions/runs/${
        Deno.env.get('GITHUB_RUN_ID')
      })`,
    },
  ))
  await (octokit().request(
    `PATCH /repos/${
      Deno.env.get('GITHUB_REPOSITORY')
    }/issues/${githubIssueNumber}`,
    {
      state: 'closed',
    },
  ))
  console.log(
    `Deployment issue resolved: https://github.com/${
      Deno.env.get('GITHUB_REPOSITORY')
    }/issues/${githubIssueNumber}`,
  )
}

export const githubCreateDeploymentIssue = async (
  changedStacks: any[],
) => {
  let templatePath = `${containerAppHome}/.github/deployment-issue.yml.ejs`
  if (!existsSync(templatePath)) {
    templatePath = '/dinghy/engine/templates/github-deployment-issue.yml.ejs'
  }
  debug('templatePath', templatePath)
  const templateContent = await Deno.readTextFile(templatePath)
  const yamlContent: string = ejs.compile(templateContent)({
    ...Deno.env.toObject(),
    changedStacks,
  })
  debug('yamlContent %s', yamlContent)
  const requestParams: any = yaml.parse(yamlContent.replaceAll('&#34;', '"'))

  const issue = await (octokit().request(
    `POST /repos/${Deno.env.get('GITHUB_REPOSITORY')}/issues`,
    requestParams,
  ))
  console.log('Deployment issue created: ', issue.data.html_url)
}

export const githubHandlePendingChanges = async (
  changedStacks: any[],
  _args: any,
) => {
  const githubOutput = Deno.env.get('GITHUB_OUTPUT')
  if (githubOutput) {
    const pendingChanges = 'pending_changes=true\n'
    debug('append to %s with %s', githubOutput, pendingChanges)
    Deno.writeTextFileSync(githubOutput, pendingChanges, {
      append: true,
    })
    if (Deno.env.get('GITHUB_CREATE_DEPLOY_ISSUE') == 'true') {
      await githubCreateDeploymentIssue(changedStacks)
    }
  }
}
