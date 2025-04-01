import { execa } from 'execa'
import { walk } from 'jsr:@std/fs/walk'
import { commitVersion } from '../../../cli/src/utils/commitVersion.ts'
import { projectRoot } from '../../../cli/src/utils/projectRoot.ts'

const version = await commitVersion(projectRoot)

const distDownload = 'dist/download'
const s3DownloadPath = 's3://reactiac-website-play-v1/download'
// const cacheControlVersioned = 's-maxage=86400,must-revalidate'
const cacheControlVersioned = 's-maxage=60,must-revalidate'
const cacheControlLatest = 's-maxage=60,must-revalidate'
const copyFilesToDistDownload = async (src: string) => {
  for await (const dirEntry of walk(src)) {
    if (dirEntry.isFile) {
      console.log(`copying ${dirEntry.path}`)
      Deno.copyFileSync(dirEntry.path, `${distDownload}/${dirEntry.name}`)
    }
  }
}

const syncToS3Download = async (source: string, target: string) => {
  const cacheControl =
    target === 'latest' ? cacheControlLatest : cacheControlVersioned
  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
  })`aws s3 sync --metadata-directive REPLACE --cache-control ${cacheControl} ${source} ${s3DownloadPath}/${target}`
}

const replaceVersion = async (file: string) => {
  const content = await Deno.readTextFile(file)
  const updated = content.replace(/REACTIAC_VERSION/g, version)
  await Deno.writeTextFile(file, updated)
}

Deno.mkdirSync(distDownload)
await copyFilesToDistDownload('download')
await replaceVersion(`${distDownload}/install.sh`)
await replaceVersion(`${distDownload}/latest-version.json`)

await syncToS3Download('dist/zips', `versions/${version}`)
await syncToS3Download(distDownload, 'latest')
