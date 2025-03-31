import { execa } from 'execa'
import { walk } from 'jsr:@std/fs/walk'

const distDownload = 'dist/download'
const s3DownloadPath = 's3://reactiac-website-play-v1/download'
const cacheControlVersioned = 's-maxage=86400,must-revalidate'
const cacheControlLatest = 's-maxage=60,must-revalidate'
const copyFilesToDistDownload = async (src: string) => {
  for await (const dirEntry of walk(src)) {
    if (dirEntry.isFile) {
      console.log(`copying ${dirEntry.path}`)
      Deno.copyFileSync(dirEntry.path, `${distDownload}/${dirEntry.name}`)
    }
  }
}

const syncToS3Download = async (target: string) => {
  const cacheControl =
    target === 'latest' ? cacheControlLatest : cacheControlVersioned
  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
  })`aws s3 sync --metadata-directive REPLACE --cache-control ${cacheControl} ${distDownload} ${s3DownloadPath}/${target}`
}

Deno.mkdirSync(distDownload)
copyFilesToDistDownload('download')
copyFilesToDistDownload('dist/zips')

// await syncToS3Download(`versions/${runtimeVersion.runner.latest}`)
await syncToS3Download('latest')
