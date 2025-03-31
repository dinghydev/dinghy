import * as cli from 'jsr:@std/cli'
const args = cli.parseArgs(Deno.args)
console.log('args', args)
