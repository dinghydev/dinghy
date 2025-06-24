import { projectVersionRelease } from './projectVersions.ts'

const URL_ERROR_REPORT = 'https://error.reactiac.dev/report'
const URL_USAGE_REPORT = 'https://usage.reactiac.dev/report'

function addSimpleCommands(params: URLSearchParams) {
  const args = Deno.args
  if (args.length === 0) {
    params.set('cmd1', 'default-help')
  } else {
    let hasCommand = false
    for (let i = 0; i < args.length; i++) {
      const arg = args[i]
      if (arg[0] === '-') {
        break
      }
      params.set(`cmd${i + 1}`, arg)
      hasCommand = true
    }
    if (!hasCommand) {
      if (args.some((arg) => arg.includes('-h'))) {
        params.set('cmd1', 'help')
      } else if (args.some((arg) => arg.includes('-v'))) {
        params.set('cmd1', 'version')
      } else if (args.some((arg) => arg.includes('-c'))) {
        params.set('cmd1', 'multi-commands')
      } else {
        params.set('cmd1', 'unknown-command')
      }
    }
  }
}

export async function sendReport(msTaken: number, error?: any) {
  try {
    const url = error ? URL_ERROR_REPORT : URL_USAGE_REPORT
    const params = new URLSearchParams()
    const cliVersion = Deno.env.get('REACTIAC_CLI_VERSION')
    if (cliVersion) {
      params.set('cli', cliVersion)
    }
    params.set('version', projectVersionRelease())
    params.set('arch', Deno.build.arch)
    params.set('os', Deno.build.os)
    params.set('ms', msTaken.toString())
    addSimpleCommands(params)
    if (error) {
      params.set('error', error.message)
      params.set('stack', error.stack)
    }
    const urlWithParams = `${url}?${params.toString()}`.substring(0, 1024)
    await fetch(urlWithParams)
  } catch (_ignoreEvenItFails) {
  }
}

export const reportResult = async (msTaken: number, error?: any) => {
  if (error) {
    await sendReport(msTaken, error)
  } else {
    const usageReportDisabled = Boolean(
      Deno.env.get('REACTIAC_USAGE_REPORT_DISABLED'),
    )
    if (!usageReportDisabled) {
      sendReport(msTaken)
    }
  }
}
