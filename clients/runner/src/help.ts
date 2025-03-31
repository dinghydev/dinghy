const RELEASE_VERSION = '0.1.0'
const version = () => `${RELEASE_VERSION} ${Deno.build.os}-${Deno.build.arch}`
import latestAtBuildTime from '../download/latest-version.json' with {
  type: 'json',
}

console.log('latestAtBuildTime', latestAtBuildTime)
let latest = latestAtBuildTime
try {
  // get today's date in YYYYMMDD format
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const today = `${year}${month}${day}`
  const todayUrl = `https://play.reactiac.dev/check/${today}/latest-version.json?runner-version=${latestAtBuildTime.runner.latest}`
  console.log('todayUrl', todayUrl)
  // const latestToday = await import(todayUrl)
  const latestToday = await import(
    'https://play.reactiac.dev/download/test2.ts?runner-version=latest'
    // {
    //   with: { type: 'json' },
    // }
  )

  const response = await fetch('https://play.reactiac.dev/download/test.ts')
  console.log('fetch result', await response.json())

  latest = latestToday.default as any
  console.log('latestToday', latestToday)
} catch (error) {
  console.log('error', error)
}
console.log('latest', latest)

export const showVersion = (args: any) => {
  if (args.version) {
    console.log(version())
    Deno.exit(0)
  }
}

export const showHelp = (args: any) => {
  if (args._.length === 0 || args.help) {
    console.log(`
      
    COMMANDS
      create         Create a new ReactIAC project
      devcontainer   Open project in a devcontainer [alias: dc]
      
    TOPICS
      diagram        Perform diagram related actions
      tf             Perform Terraform/OpenTofu related actions
  `)
    Deno.exit(0)
  }
}
