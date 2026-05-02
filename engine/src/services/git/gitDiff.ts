import { cmdCapture, hostAppHome } from '@dinghy/cli'
import { Octokit } from '@octokit/core'
import { Gitlab } from '@gitbeaker/rest'

const DEFAULT_MAX_DIFF_LINES = 4000
const DEFAULT_BRANCH = 'main'

const maxDiffLines = (): number =>
  Number(Deno.env.get('DINGHY_GIT_DIFF_MAX_LINES')) || DEFAULT_MAX_DIFF_LINES

const defaultBranch = (): string =>
  Deno.env.get('DINGHY_GIT_DEFAULT_BRANCH') || DEFAULT_BRANCH

const truncateLines = (text: string, maxLines: number): string => {
  const lines = text.split(/\r?\n/)
  if (lines.length <= maxLines) return text
  return lines.slice(0, maxLines).join('\n') +
    `\n... [${lines.length - maxLines} more lines truncated]`
}

const gitOutput = async (gitArgs: string[]): Promise<string> => {
  const result = await cmdCapture(['git', ...gitArgs], false, hostAppHome)
  if (!result.success) {
    console.error('git operation failed', gitArgs, result.output)
    return ''
  }
  return (result.output ?? '').trimEnd()
}

const gitRefExists = async (ref: string): Promise<boolean> => {
  const result = await cmdCapture(
    ['git', 'rev-parse', '--verify', '--quiet', ref],
    false,
    hostAppHome,
  )
  return result.success
}

const isGeneratedPath = (path: string): boolean => {
  const lastSlash = path.lastIndexOf('/')
  if (lastSlash < 0) return false
  return path.slice(0, lastSlash).toLowerCase().includes('output')
}

const collectLocalGitDiff = async (): Promise<string> => {
  const main = defaultBranch()
  const branch = (await gitOutput(['rev-parse', '--abbrev-ref', 'HEAD'])).trim()
  const onBranch = branch && branch !== 'HEAD' && branch !== main
  const baseRef = onBranch
    ? (await gitRefExists(main)
      ? main
      : await gitRefExists(`origin/${main}`)
      ? `origin/${main}`
      : null)
    : null

  if (baseRef) {
    const range = `${baseRef}...HEAD`
    const fileListRaw = await gitOutput([
      'diff',
      '--name-only',
      '--no-color',
      range,
    ])
    const fileList = fileListRaw.split('\n').map((f) => f.trim()).filter((f) =>
      f && !isGeneratedPath(f)
    )
    if (fileList.length === 0) return ''
    const out = await gitOutput([
      'diff',
      '--stat',
      '-p',
      '--no-color',
      range,
      '--',
      ...fileList,
    ])
    return truncateLines(out, maxDiffLines())
  }

  const fileListRaw = await gitOutput([
    'show',
    '--name-only',
    '--pretty=format:',
    '--no-color',
    'HEAD',
  ])
  const fileList = fileListRaw.split('\n').map((f) => f.trim()).filter((f) =>
    f && !isGeneratedPath(f)
  )
  if (fileList.length === 0) return ''
  const out = await gitOutput([
    'show',
    '--stat',
    '-p',
    '--no-color',
    'HEAD',
    '--',
    ...fileList,
  ])
  return truncateLines(out, maxDiffLines())
}

const collectGitlabApiDiff = async (): Promise<string> => {
  const projectId = Deno.env.get('CI_PROJECT_ID')!
  const sha = Deno.env.get('CI_COMMIT_SHA')!
  const mrIid = Deno.env.get('CI_MERGE_REQUEST_IID')
  const host = Deno.env.get('CI_SERVER_URL') || 'https://gitlab.com'
  const token = Deno.env.get('GITLAB_API_TOKEN') ||
    Deno.env.get('CI_JOB_TOKEN')
  if (!token) {
    throw new Error(
      'GitLab CI detected but neither GITLAB_API_TOKEN nor CI_JOB_TOKEN is set',
    )
  }
  const api = new Gitlab({ host, token })

  let header: string[]
  let diffs: any[]
  if (mrIid) {
    const mr: any = await api.MergeRequests.show(projectId, Number(mrIid))
    diffs = await api.MergeRequests.allDiffs(
      projectId,
      Number(mrIid),
      { perPage: 100 },
    ) as any[]
    header = [
      `merge_request !${mrIid}`,
      `title: ${mr.title ?? ''}`,
      mr.description ?? '',
      '',
    ]
  } else {
    const commit: any = await api.Commits.show(projectId, sha)
    diffs = await api.Commits.showDiff(projectId, sha) as any[]
    header = [
      `commit ${sha}`,
      '',
      commit.message ?? commit.title ?? '',
      '',
    ]
  }

  const sections = [...header]
  for (const d of diffs) {
    if (isGeneratedPath(d.old_path) || isGeneratedPath(d.new_path)) continue
    sections.push(`--- a/${d.old_path}`, `+++ b/${d.new_path}`, d.diff)
  }
  return truncateLines(sections.join('\n'), maxDiffLines())
}

const collectGithubApiDiff = async (): Promise<string> => {
  const repo = Deno.env.get('GITHUB_REPOSITORY')!
  const sha = Deno.env.get('GITHUB_SHA')!
  const ghRef = Deno.env.get('GITHUB_REF') || ''
  const prMatch = ghRef.match(/^refs\/pull\/(\d+)\//)
  const token = Deno.env.get('GH_TOKEN') || Deno.env.get('GITHUB_TOKEN')
  if (!token) {
    throw new Error(
      'GitHub Actions detected but neither GH_TOKEN nor GITHUB_TOKEN is set',
    )
  }
  const [owner, repoName] = repo.split('/')
  const octokit = new Octokit({ auth: token })

  let header: string[]
  let files: any[]
  if (prMatch) {
    const pull_number = Number(prMatch[1])
    const { data: pr }: any = await octokit.request(
      'GET /repos/{owner}/{repo}/pulls/{pull_number}',
      { owner, repo: repoName, pull_number },
    )
    const { data: filesData }: any = await octokit.request(
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/files',
      { owner, repo: repoName, pull_number, per_page: 100 },
    )
    files = filesData ?? []
    header = [
      `pull_request #${pull_number}`,
      `title: ${pr.title ?? ''}`,
      pr.body ?? '',
      '',
    ]
  } else {
    const { data }: any = await octokit.request(
      'GET /repos/{owner}/{repo}/commits/{ref}',
      { owner, repo: repoName, ref: sha },
    )
    files = data.files ?? []
    header = [
      `commit ${sha}`,
      '',
      data.commit?.message ?? '',
      '',
    ]
  }

  const sections = [...header]
  for (const f of files) {
    if (isGeneratedPath(f.filename)) continue
    sections.push(`--- a/${f.filename}`, `+++ b/${f.filename}`, f.patch ?? '')
  }
  return truncateLines(sections.join('\n'), maxDiffLines())
}

export const collectGitDiff = async (): Promise<string> => {
  if (Deno.env.get('CI_PROJECT_ID') && Deno.env.get('CI_COMMIT_SHA')) {
    return await collectGitlabApiDiff()
  }
  if (Deno.env.get('GITHUB_REPOSITORY') && Deno.env.get('GITHUB_SHA')) {
    return await collectGithubApiDiff()
  }
  return await collectLocalGitDiff()
}
