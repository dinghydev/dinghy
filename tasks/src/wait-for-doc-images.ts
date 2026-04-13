import { $ } from 'execa'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'
import { configEngineRepoDefault } from '../../cli/src/utils/dockerConfig.ts'

if (import.meta.main) {
  console.log('Generating versions file via docker build --dryrun ...')
  await $({
    stdio: 'inherit',
    cwd: projectRoot,
  })`deno run -A cli/src/index.ts docker build --dryrun`

  const versions = JSON.parse(
    Deno.readTextFileSync(`${projectRoot}/.versions.json`),
  )
  const images = ['site', 'slide'].map((name) => ({
    name,
    image: `${configEngineRepoDefault}:${versions[name]}`,
  }))

  const maxAttempts = 60
  const intervalSeconds = 10

  for (const { name, image } of images) {
    console.log(`Waiting for ${name} image ${image} ...`)
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const { exitCode } = await $({
        reject: false,
        stdio: 'ignore',
      })`docker manifest inspect ${image}`
      if (exitCode === 0) {
        console.log(`Found ${name} image ${image}`)
        break
      }
      if (attempt === maxAttempts) {
        console.error(
          `Timed out waiting for ${name} image ${image} after ${
            maxAttempts * intervalSeconds / 60
          } minutes`,
        )
        Deno.exit(1)
      }
      console.log(
        `Attempt ${attempt}/${maxAttempts}: ${name} image not yet available, retrying in ${intervalSeconds}s...`,
      )
      await new Promise((resolve) =>
        setTimeout(resolve, intervalSeconds * 1000)
      )
    }
  }

  console.log('All doc images are available.')
}
