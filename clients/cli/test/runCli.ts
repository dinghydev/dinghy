
import {runCommand} from '@oclif/test'


export const runCli=(cmd:string)=> runCommand(cmd, { root: "." })