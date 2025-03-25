import * as fs from 'jsr:@std/fs@1.0.14'
import { debug } from "./debug.ts";
import * as yaml from 'jsr:@std/yaml@1.0.5'
import * as cli from 'jsr:@std/cli@1.0.14'

export function appHome():string {
  const args = cli.parseArgs(Deno.args)
  return args['app-home'] || Deno.cwd()
}

export function loadAppConfig():any {
  const configFile=`${appHome()}/app.yaml`
  if (!fs.existsSync(configFile)) {
    return {}
  }

  const config= yaml.parse(Deno.readTextFileSync(configFile))
  debug('loaded app config from {0}',configFile)
  return config || {}
}
