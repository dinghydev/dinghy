import { execa } from 'execa'

if (import.meta.main) {
  console.log(`Releasing site for ${Deno.args[0]}...`)
  const site = Deno.args[0]
  await execa({
    stdio: 'inherit',
    input: `
      set -e
      cd ../engine/
      deno run -A src/index.ts site build --app-home ./../sites/ --site-dir ${site} --output ${site}/output
      ${
      site === 'www'
        ? 'DINGHY_SLIDE_BASE_URL=/slides/ deno run -A src/index.ts slide build --app-home ./../sites/www --output-build site/slides'
        : ''
    }
      deno run -A src/index.ts site deploy --app-home ./../sites/ --site-dir ${site} --output ${site}/output
    `,
  })`sh`
  console.log('Released site for', Deno.args[0])
}
