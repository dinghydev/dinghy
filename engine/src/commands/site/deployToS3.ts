import { type CommandArgs, CommandContext } from '@dinghy/cli'
import { walk } from '@std/fs'
import { existsSync } from 'node:fs'
import { GzipStream } from 'jsr:@deno-library/compress'
import { s3UploadFile } from '../../utils/index.ts'
import { s3Sync } from '../../utils/s3.ts'
import chalk from 'chalk'
import { DeployConfigSchema } from './deploy-config-schema.ts'
export const deployToS3 = async (
  _context: CommandContext,
  _args: CommandArgs,
  outputDir: string,
  siteConfig: any,
) => {
  const startTime = Date.now()
  const deployConfig = DeployConfigSchema.parse(siteConfig)
  const { s3Region, s3Url } = deployConfig.deploy
  const m = /^s3:\/\/([^/]+)\/?(.*)$/.exec(s3Url)
  if (!m) throw new Error(`Invalid S3 Url: ${s3Url}`)
  const s3Bucket = m[1]
  const s3Prefix = m[2]
  const immutablePatterns = deployConfig.deploy.immutablePatterns.map(
    (p) => new RegExp(p),
  )
  const isDomainRoot = deployConfig.baseUrl === '/'
  const targetBaseDir = isDomainRoot ? '' : deployConfig.baseUrl.substring(1)
  const resolveFileName = (path: string) => {
    if (path === 'index.html') {
      if (isDomainRoot) {
        return path
      } else {
        return ''
      }
    }
    if (path === '404.html') {
      return path
    }
    return path.substring(path.lastIndexOf('/') + 1, path.length - 5)
  }

  const categories = {} as Record<string, string[]>
  for await (const entry of walk(outputDir, { includeDirs: false })) {
    const relativePath = entry.path.substring(outputDir.length + 1)
    const extension = relativePath.split('.').pop() || ''
    const isHtml = extension === 'html'
    const isGzip = isHtml ||
      deployConfig.deploy.gzipExtensions.includes(extension)
    const isImmutable = !isHtml &&
      immutablePatterns.some((regex) => regex.test(relativePath))

    const category = isHtml
      ? 'html-mutable'
      : isGzip
      ? `gzip-${isImmutable ? 'immutable' : 'mutable'}`
      : `regular-${isImmutable ? 'immutable' : 'mutable'}`
    let targetPath = `${outputDir}-${category}/${targetBaseDir}${
      relativePath.substring(0, relativePath.lastIndexOf('/') + 1)
    }`
    if (isHtml) {
      const isIndex = relativePath === 'index.html' ||
        existsSync(`${entry.path.substring(0, entry.path.length - 5)}`)
      if (isIndex) {
        const s3Key = `${s3Prefix}/${targetBaseDir}${
          relativePath.substring(0, relativePath.lastIndexOf('/') + 1)
        }${resolveFileName(relativePath)}`
        console.log('S3 uploading index file', s3Key)
        await s3UploadFile(
          s3Region,
          s3Bucket,
          s3Key,
          entry.path,
          {
            ContentType: 'text/html; charset=utf-8',
            ContentEncoding: isGzip ? 'gzip' : undefined,
            CacheControl: deployConfig.deploy.cacheControl.mutable,
          },
        )
        continue
      }
      targetPath = `${outputDir}-${category}/${targetBaseDir}${
        relativePath.substring(0, relativePath.lastIndexOf('/') + 1)
      }${resolveFileName(relativePath)}`
    } else {
      targetPath = `${outputDir}-${category}/${targetBaseDir}${
        relativePath.substring(0, relativePath.lastIndexOf('/') + 1)
      }/${entry.name}`
    }
    const targetFolder = `${
      targetPath.substring(0, targetPath.lastIndexOf('/'))
    }`
    if (!existsSync(targetFolder)) {
      await Deno.mkdir(targetFolder, { recursive: true })
    }
    if (isGzip) {
      await new GzipStream().compress(entry.path, targetPath)
    } else {
      await Deno.copyFile(entry.path, targetPath)
    }

    categories[category] ??= []
    categories[category].push(targetPath)
  }
  for (const category of Object.keys(categories)) {
    const files = categories[category]
    const categoryPath = `${outputDir}-${category}`
    console.log(`S3 syncing ${category} with ${files.length} files...`)

    const isHtml = category === 'html-mutable'
    const isGzip = isHtml || category.startsWith('gzip-')
    const cacheControl = category.endsWith('-immutable')
      ? deployConfig.deploy.cacheControl.immutable
      : deployConfig.deploy.cacheControl.mutable

    await s3Sync(categoryPath, `s3://${s3Bucket}/${s3Prefix}`, {
      region: s3Region,
      'content-type': isHtml ? 'text/html;charset=utf-8' : undefined,
      'content-encoding': isGzip ? 'gzip' : undefined,
      'cache-control': cacheControl,
    })

    if (deployConfig.deploy.cleanUpStagingFiles) {
      await Deno.remove(categoryPath, { recursive: true })
    }
  }
  console.log(
    `Deployed ${chalk.grey(outputDir)} to ${chalk.grey(s3Url)} in ${
      chalk.green((Date.now() - startTime) / 1000)
    } seconds.`,
  )
}
