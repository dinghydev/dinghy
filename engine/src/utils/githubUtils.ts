import Debug from 'debug'
import { containerAppHome } from '@dinghy/cli'
import { Octokit } from '@octokit/core'
import ejs from 'ejs'
import * as yaml from '@std/yaml'
import { existsSync } from '@std/fs/exists'
import { projectName } from './gitUtils.ts'
import { dublinTimeNow } from './timeUtils.ts'
import { temporaryStorageGetFile, temporaryStorageSaveFile } from './s3.ts'

const debug = Debug('githubUtils')

export const prNumber = () => {
  const ref = Deno.env.get('GITHUB_REF') || ''
  const m = ref.match(/^refs\/pull\/(\d+)\//)
  return m ? m[1] : undefined
}

export const isPr = () => prNumber() !== undefined

const githubToken = () =>
  Deno.env.get('GH_TOKEN') || Deno.env.get('GITHUB_TOKEN')

const octokit = () =>
  new Octokit({
    auth: githubToken(),
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

const githubPrCommentKey = async (pr: string, type: string) =>
  `projects/${await projectName()}/github_pr_comment/${pr}/${
    dublinTimeNow().split(' ')[0]
  }/${type}`

export const upsertPrComment = async (
  markDown: string,
  stackKey: string,
) => {
  const repo = Deno.env.get('GITHUB_REPOSITORY')
  const pr = prNumber()
  if (!repo || !pr || !githubToken()) {
    debug('missing GITHUB_REPOSITORY, PR ref, or token; skip pr comment')
    return
  }

  const key = await githubPrCommentKey(pr, stackKey)
  debug('github pr comment key: %s', key)
  const existingCommentId = await temporaryStorageGetFile(key)
  debug('github pr comment existingCommentId: %s', existingCommentId)

  if (existingCommentId) {
    await octokit().request(
      `PATCH /repos/${repo}/issues/comments/${existingCommentId}`,
      { body: markDown },
    )
  } else {
    const response: any = await octokit().request(
      `POST /repos/${repo}/issues/${pr}/comments`,
      { body: markDown },
    )
    await temporaryStorageSaveFile(key, response.data.id.toString())
  }

  debug(
    `dinghy pr comment ${
      existingCommentId ? 'edited' : 'attached'
    } for pull request ${pr}`,
  )
}
