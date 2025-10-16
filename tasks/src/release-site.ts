import { execa } from 'execa'

if (import.meta.main) {
  console.log(`Releasing site for ${Deno.args[0]}...`)
  const site = Deno.args[0]
  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
    input: `
      set -e
      cd ../engine/
      deno run -A src/index.ts site build --app-home ./../ --site ${site}
      deno run -A src/index.ts site deploy --app-home ./../ --site ${site}
    `,
  })`sh`
  console.log('Released site for', Deno.args[0])
}
