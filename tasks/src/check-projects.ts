import chalk from 'chalk'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'
import { execa } from 'execa'
if (import.meta.main) {
  const results: any[] = []
  const runDenoCmd = async (project: string, cmd: string) => {
    const cwd = `${projectRoot}/${project}`
    console.log(
      `Running [deno ${cmd}] from ${cwd} ...`,
    )
    const result = await execa('deno', cmd.split(' '), {
      stderr: 'inherit',
      stdout: 'inherit',
      all: true,
      cwd,
      reject: false,
    })
    results.push({
      project,
      cmd,
      result,
    })
  }
  const runGitDiff = async () => {
    console.log('::group::Check Projects: git diff')
    const cwd = projectRoot
    console.log(
      `Running [git diff] from ${cwd} ...`,
    )
    const result = await execa('git', ['diff'], {
      stderr: ['pipe', 'inherit'],
      stdout: ['pipe', 'inherit'],
      all: true,
      cwd,
      reject: false,
    })

    if (result.all) {
      result.exitCode = 1
    }
    results.push({
      project: 'root',
      cmd: 'git diff',
      result,
    })
    console.log('::endgroup::')
  }

  console.log('::group::Check Projects: checks')
  for (
    const project of [
      'core',
      'engine',
      'cli',
      'tasks',
      // 'examples',
    ]
  ) {
    for (const cmd of ['check', 'fmt', 'lint']) {
      const cwd = `${projectRoot}/${project}`
      if (cmd === 'check' && project === 'core') {
        const folders = Deno.readDirSync(cwd)
          .filter((entry) => entry.isDirectory)
          .map((entry) => entry.name)
        for (const folder of folders) {
          if (['tf-aws'].includes(folder) && cmd === 'check') {
            continue
          }
          await runDenoCmd(`${project}/${folder}`, cmd)
        }
        continue
      } else {
        await runDenoCmd(project, cmd)
      }
    }
  }
  console.log('::endgroup::')
  console.log('::group::Check Projects: generate docs')
  await runDenoCmd('engine', 'run -A src/generate-docs.ts')
  console.log('::endgroup::')
  await runGitDiff()
  console.log('::group::Check Projects: results')
  console.log(
    results.map((r) =>
      `${r.project} ${r.cmd} ${
        r.result.exitCode ? chalk.red('FAIL') : chalk.green('PASS')
      }`
    ).join('\n'),
  )
  if (results.some((r) => r.result.exitCode)) {
    console.log(
      chalk.red(
        'Some projects failed to check, fmt, lint, or git diff. Please fix them and try again.',
      ),
    )
    console.log('::endgroup::')
    Deno.exit(1)
  } else {
    console.log('::endgroup::')
  }
}
