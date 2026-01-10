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

export const appendToGithubFile = (name: string, text: string) => {
  const githubPath = Deno.env.get(name) as string
  if (githubPath) {
    debug('appending to %s with text %s', githubPath, text)
    Deno.writeTextFileSync(githubPath, `${text}\n`, {
      append: true,
    })
    console.log(`Set ${text}`)
  } else {
    throw new Error(`${name} is not set`)
  }
}

export const appendToGithubEnv = (text: string) => {
  appendToGithubFile('GITHUB_ENV', text)
}

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
  if (Deno.env.get('GITHUB_ENV')) {
    appendToGithubEnv('DINGHY_TF_DIFF_PENDING_CHANGES=true')
    if (Deno.env.get('GITHUB_CREATE_DEPLOY_ISSUE') == 'true') {
      await githubCreateDeploymentIssue(changedStacks)
    }
  }
}
