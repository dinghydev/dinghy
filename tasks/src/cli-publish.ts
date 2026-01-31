import { $ } from 'execa'
import { walk } from 'jsr:@std/fs@1.0.15'
import { projectVersionRelease } from '../../cli/src/utils/projectVersions.ts'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'

const cliSrcFolder = `${projectRoot}/cli`
const cliOutputFolder = `${projectRoot}/build/cli`

const distDownload = `${cliOutputFolder}/download`
const s3DownloadPath = 's3://dinghy-dev-site-get'
// const cacheControlVersioned = 's-maxage=86400,must-revalidate'
const cacheControlVersioned = 's-maxage=60,must-revalidate'
const cacheControlLatest = 's-maxage=60,must-revalidate'
const copyFilesToDistDownload = async (src: string) => {
  for await (const dirEntry of walk(src)) {
    if (dirEntry.isFile) {
      console.log(`copying ${dirEntry.path}`)
      Deno.copyFileSync(
        dirEntry.path,
        `${distDownload}/${dirEntry.path.split('/download/')[1]}`,
      )
    }
  }
}

const syncToS3Download = async (source: string, target: string) => {
  const cacheControl = target === ''
    ? cacheControlLatest
    : cacheControlVersioned
  await $({
    stdio: 'inherit',
  })`aws s3 sync --metadata-directive REPLACE --cache-control ${cacheControl} ${source} ${s3DownloadPath}${target}`
}

const replaceVersion = async (file: string) => {
  const content = await Deno.readTextFile(file)
  const updated = content.replace(/RELEASE_VERSION/g, projectVersionRelease())
  await Deno.writeTextFile(file, updated)
}

const fixedVersion = async (file: string) => {
  const content = await Deno.readTextFile(file)
  const updated: string[] = []
  let skipped = false
  content.split('\n').forEach((line) => {
    if (line.includes('dinghy_version=')) {
      skipped = false
      updated.push(`	dinghy_version="${projectVersionRelease()}"`)
    } else if (line.includes('DINGHY_VERSION')) {
      skipped = true
    } else if (!skipped) {
      updated.push(line)
    }
  })
  await Deno.writeTextFile(file, updated.join('\n').trim() + '\n')
}

await $({ stdio: 'inherit', cwd: cliSrcFolder })`deno ${['task', 'check']}`

Deno.mkdirSync(distDownload, { recursive: true })
Deno.mkdirSync(`${distDownload}/templates`, { recursive: true })
await copyFilesToDistDownload(`${cliSrcFolder}/download`)
await replaceVersion(`${distDownload}/install.sh`)
await replaceVersion(`${distDownload}/latest-version.json`)
Deno.mkdirSync(`${distDownload}/versions/${projectVersionRelease()}`, {
  recursive: true,
})
Deno.copyFileSync(
  `${distDownload}/install.sh`,
  `${cliOutputFolder}/release/dinghy-${projectVersionRelease()}-install.sh`,
)
await fixedVersion(
  `${cliOutputFolder}/release/dinghy-${projectVersionRelease()}-install.sh`,
)

console.log('Release files size:')
await $({ stdio: 'inherit' })`du -sh ${cliOutputFolder}/release`

console.log('Perform github release ...')
const releaseTitle = `Release ${projectVersionRelease()}`
const releaseNotes =
  ` Full Changelog: https://github.com/dinghydev/dinghy/commits/v${projectVersionRelease()}

## Install latest release

Run the following command to install the latest release:

\`\`\`sh
curl -fsSL https://get.dinghy.dev/install.sh | sh
\`\`\`

## Install this release

\`\`\`sh
curl -fsSL https://get.dinghy.dev/install.sh | DINGHY_VERSION=${projectVersionRelease()} sh
\`\`\`
`
await $({ stdio: 'inherit' })`gh release create v${projectVersionRelease()} \
  --notes ${releaseNotes} \
  --title ${releaseTitle}`

console.log('Uploading release files to github...')
await $({ stdio: 'inherit' })`gh release upload v${projectVersionRelease()} \
 ${cliOutputFolder}/release/dinghy-${projectVersionRelease()}-install.sh \
 ${cliOutputFolder}/release/dinghy-${projectVersionRelease()}-x86_64-unknown-linux-gnu.zip \
 ${cliOutputFolder}/release/dinghy-${projectVersionRelease()}-aarch64-unknown-linux-gnu.zip \
 ${cliOutputFolder}/release/dinghy-${projectVersionRelease()}-x86_64-apple-darwin.zip \
 ${cliOutputFolder}/release/dinghy-${projectVersionRelease()}-aarch64-apple-darwin.zip`

console.log(
  `https://github.com/dinghydev/dinghy/releases/download/v${projectVersionRelease()}/dinghy-${projectVersionRelease()}-install.sh`,
)

console.log('Syncing to get.dinghy.dev ...')
await syncToS3Download(distDownload, '')
