import { execa } from 'execa'
import { walk } from 'jsr:@std/fs@1.0.15'
import { projectVersionRelease } from '../../cli/src/utils/projectVersions.ts'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'

const cliSrcFolder = `${projectRoot}/cli`
const cliOutputFolder = `${projectRoot}/build/cli`

const distDownload = `${cliOutputFolder}/download`
const s3DownloadPath = 's3://diac-website-play-v1/download'
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
  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
  })`aws s3 sync --metadata-directive REPLACE --cache-control ${cacheControl} ${source} ${s3DownloadPath}${target}`
}

const replaceVersion = async (file: string) => {
  const content = await Deno.readTextFile(file)
  const updated = content.replace(/RELEASE_VERSION/g, projectVersionRelease())
  await Deno.writeTextFile(file, updated)
}

await execa({
  stderr: 'inherit',
  stdout: 'inherit',
  cwd: cliSrcFolder,
})`deno ${['task', 'check']}`

Deno.mkdirSync(distDownload, { recursive: true })
Deno.mkdirSync(`${distDownload}/templates`, { recursive: true })
await copyFilesToDistDownload(`${cliSrcFolder}/download`)
await replaceVersion(`${distDownload}/install.sh`)
await replaceVersion(`${distDownload}/latest-version.json`)

await syncToS3Download(
  `${cliOutputFolder}/zips`,
  `/versions/${projectVersionRelease()}`,
)
await syncToS3Download(distDownload, '')
