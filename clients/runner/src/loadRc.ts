import * as fs from 'jsr:@std/fs@1.0.14'
import { debug } from "./debug.ts";
import { appHome } from "./loadAppConfig.ts";


function loadEnvFile(path: string,rcs: string[][]) {
  if (!fs.existsSync(path)) {
    return
  }

  for (const line of Deno.readTextFileSync(path).split(/\r?\n/)) {
    const index = line.indexOf('=')
    if (index > 0 && !line.startsWith('#')) {
      const k = line.slice(0, index).trim()
      const v = line.slice(index + 1).trim()
      rcs.push([k,v])
      debug('loaded {0}=* from {1}',k,path)
    }
  }
}

export function loadRc() {
  const rcs:string[][]=[]
  const apphome = appHome()
  for (const file of [
    `${Deno.env.get('HOME')}/.reactiacrc`,
    `${apphome}/.reactiacrc`,
    `${apphome}/.reactiacrc.local`,
  ]) {
    loadEnvFile(file,rcs)
  }
  return rcs
}
