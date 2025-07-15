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
    const result = await execa('deno', [cmd], {
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
          // if (['standard-components-diagrams'].includes(folder)) {
          //   continue
          // }
          await runDenoCmd(`${project}/${folder}`, cmd)
        }
        continue
      } else {
        await runDenoCmd(project, cmd)
      }
    }
  }
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
        'Some projects failed to check, fmt, or lint. Please fix them and try again.',
      ),
    )
    Deno.exit(1)
  }
}
