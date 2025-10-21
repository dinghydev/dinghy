import { type CommandArgs, CommandContext } from '@dinghy/cli'
import { walk } from '@std/fs'
import { existsSync } from 'node:fs'
import { s3UploadFile } from '../../utils/index.ts'
import { s3Sync } from '../../utils/s3.ts'
import { gzip } from 'jsr:@deno-library/compress'
import chalk from 'chalk'
import { SiteConfigSchema } from './site-config-schema.ts'
export const deployToS3 = async (
  _context: CommandContext,
  _args: CommandArgs,
  outputDir: string,
  siteConfig: any,
) => {
  const startTime = Date.now()
  const deployConfig = SiteConfigSchema.parse(siteConfig)
  const {
    s3Region,
    s3Url,
    immutablePatterns,
    cacheControl,
    gzipExtensions,
    cleanUpStagingFiles,
  } = deployConfig.site!.deploy
  const s3Bucket = s3Url.split('/')[2]
  let s3Prefix = s3Url.substring(s3Url.indexOf(s3Bucket) + s3Bucket.length + 1)
  if (s3Prefix.endsWith('/')) {
    s3Prefix = s3Prefix.substring(0, s3Prefix.length - 1)
  }

  const iPatterns = immutablePatterns.map(
    (p) => new RegExp(p),
  )
  const targetBaseDir = deployConfig.baseUrl === '/'
    ? ''
    : deployConfig.baseUrl.substring(
      1,
      deployConfig.baseUrl.length - 1,
    )
  const resolveFileName = (path: string) => {
    if (path === 'index.html') {
      return ''
    }
    if (path === '404.html') {
      return path
    }
    return path.substring(path.lastIndexOf('/') + 1, path.length - 5)
  }

  const categories = {
    'gzip-mutable': [],
    'gzip-immutable': [],
    'regular-mutable': [],
    'regular-immutable': [],
    'html-mutable': [],
    'html-immutable': [],
  } as Record<string, string[]>
  const folderFiles = {} as Record<string, string>
  for await (const entry of walk(outputDir, { includeDirs: false })) {
    const relativePath = entry.path.substring(outputDir.length + 1)
    const extension = relativePath.split('.').pop() || ''
    const isHtml = extension === 'html'
    const isGzip = isHtml ||
      gzipExtensions.includes(extension)
    const isImmutable = !isHtml &&
      iPatterns.some((regex) => regex.test(relativePath))

    const category = isHtml
      ? 'html-mutable'
      : isGzip
      ? `gzip-${isImmutable ? 'immutable' : 'mutable'}`
      : `regular-${isImmutable ? 'immutable' : 'mutable'}`
    let targetPath = `${outputDir}-${category}/${targetBaseDir}${
      relativePath.substring(0, relativePath.lastIndexOf('/') + 1)
    }`
    const subPath = relativePath.substring(
      0,
      relativePath.lastIndexOf('/') + 1,
    )
    targetPath = `${outputDir}-${category}`
    if (targetBaseDir) {
      targetPath += `/${targetBaseDir}`
    }
    if (subPath) {
      targetPath += `/${subPath}`
    }
    if (isHtml) {
      const fileName = resolveFileName(relativePath)
      const isFolderIndex = !deployConfig.trailingSlash &&
        (relativePath === 'index.html' ||
          existsSync(`${entry.path.substring(0, entry.path.length - 5)}`))
      if (isFolderIndex) {
        let s3Key = s3Prefix
        if (targetBaseDir) {
          s3Key = `${s3Key ? `${s3Key}/` : ''}${targetBaseDir}`
        }
        if (subPath) {
          s3Key = `${s3Key ? `${s3Key}/` : ''}${
            subPath.substring(0, subPath.length - 1)
          }`
        }
        s3Key = `${s3Key ? `${s3Key}/` : ''}${fileName}`
        if (!s3Key) {
          s3Key = '/'
        }
        folderFiles[s3Key] = entry.path
        continue
      }
      targetPath = `${targetPath}/${fileName}`
    } else {
      targetPath = `${targetPath}/${entry.name}`
    }
    const targetFolder = `${
      targetPath.substring(0, targetPath.lastIndexOf('/'))
    }`
    if (!existsSync(targetFolder)) {
      await Deno.mkdir(targetFolder, { recursive: true })
    }
    if (isGzip) {
      const fileData = Deno.readFileSync(entry.path)
      const gzippedData = await gzip(fileData)
      await Deno.writeFile(targetPath, gzippedData)
    } else {
      await Deno.copyFile(entry.path, targetPath)
    }

    categories[category] ??= []
    categories[category].push(targetPath)
  }
  for (const category of Object.keys(categories)) {
    const files = categories[category]
    if (files.length === 0) {
      continue
    }
    const categoryPath = `${outputDir}-${category}`
    console.log(`S3 syncing ${category} with ${files.length} files...`)

    const isHtml = category === 'html-mutable'
    const isGzip = isHtml || category.startsWith('gzip-')
    const cacheControlValue = category.endsWith('-immutable')
      ? cacheControl.immutable
      : cacheControl.mutable

    await s3Sync(categoryPath, `s3://${s3Bucket}/${s3Prefix}`, {
      region: s3Region,
      'content-type': isHtml ? 'text/html;charset=utf-8' : undefined,
      'content-encoding': isGzip ? 'gzip' : undefined,
      'cache-control': cacheControlValue,
    })
  }

  for (const [s3Key, path] of Object.entries(folderFiles)) {
    console.log('S3 uploading folder file', s3Key)
    await s3UploadFile(
      s3Region,
      s3Bucket,
      s3Key,
      path,
      {
        ContentType: 'text/html; charset=utf-8',
        ContentEncoding: 'gzip',
        CacheControl: cacheControl.mutable,
      },
    )
  }

  if (cleanUpStagingFiles) {
    for (const category of Object.keys(categories)) {
      const files = categories[category]
      if (files.length === 0) {
        continue
      }
      const categoryPath = `${outputDir}-${category}`
      try {
        await Deno.remove(categoryPath, { recursive: true })
      } catch {
        console.warn(`WARN: Failed to remove: ${categoryPath}`)
      }
    }
  }
  console.log(
    `Deployed ${chalk.grey(outputDir)} to ${chalk.grey(s3Url)} in ${
      chalk.green((Date.now() - startTime) / 1000)
    } seconds.`,
  )
}
