import { setupDebug } from '../utils/setupDebug.ts'
import { loadConfig, reactiacAppHome } from '../utils/loadConfig.ts'
import { parseOptions } from '../utils/parseOptions.ts'
import Debug from 'debug'
const debug = Debug('render')
setupDebug()
await loadConfig()

debug('tf generate started at %O', new Date())
const args = parseOptions({}, Deno.args, ['tf', 'generate'])
console.log('args', args)
console.log('reactiacAppHome', reactiacAppHome)

const stateJsonFile = args['state-json-file']
const stateJson = JSON.parse(Deno.readTextFileSync(stateJsonFile))

const resources = stateJson.values?.root_module?.resources
if (!resources) {
  console.error('No resources found in the state json file')
  Deno.exit(1)
}
for (const resource of resources) {
  console.log(resource.type)
}

// const appTsx = "foo";
// const appTsxFile = args["app-tsx-file"];

// if (appTsxFile) {
//   Deno.writeTextFileSync(appTsxFile, appTsx);
//   console.log(chalk.green("Saved App.tsx to"), appTsxFile);
// } else {
//   const title = "GENEATED App.tsx";
//   console.log(chalk.green(title));
//   console.log("".padEnd(title.length, "="));
//   console.log(appTsx);
//   console.log("".padEnd(title.length, "="));
// }

debug('tf generate finished at %O', new Date())
