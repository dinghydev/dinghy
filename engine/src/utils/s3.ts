import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'

import Debug from 'debug'
// import { sleep } from './timeUtils.ts'
import { configGetImage, runDockerCmd } from '@dinghy/cli'
// import { runTfImageCmd } from '../commands/tf/runTfImageCmd.ts'
import { gzip } from 'jsr:@deno-library/compress'
const debug = Debug('aws:s3')

export const s3GetFile = async (
  region: string,
  Bucket: string,
  Key: string,
) => {
  const s3Command = new GetObjectCommand({
    Bucket,
    Key,
  })
  debug('download s3://%s/%s request', Bucket, Key)
  const s3Response = await s3Client(region).send(s3Command)
  const body = await s3Response.Body!.transformToString('utf-8')

  // const s3GetFileName = `${hostAppHome}/s3GetFile`
  // const result = await runTfImageCmd(
  //   hostAppHome,
  //   {} as any,
  //   [
  //     'aws',
  //     's3',
  //     'cp',
  //     `s3://${Bucket}/${Key}`,
  //     s3GetFileName,
  //     '--region',
  //     region,
  //   ],
  //   false,
  // )
  // if (result.exitCode !== 0) {
  //   debug('Failed to download s3://%s/%s', Bucket, Key)
  //   return null
  // }
  // const body = Deno.readTextFileSync(s3GetFileName)
  // Deno.removeSync(s3GetFileName)
  debug('download response: %s', body)
  return body
}

export const s3WriteString = async (
  region: string,
  Bucket: string,
  Key: string,
  Body: string,
  options = {},
) => {
  const s3Command = new PutObjectCommand({
    ...options,
    Bucket,
    Key,
    Body,
  })
  debug('upload s3://%s/%s request', Bucket, Key)
  const s3Response = await s3Client(region).send(s3Command)
  debug('upload response', s3Response)

  // const s3WriteStringName = `${hostAppHome}/s3WriteString`
  // Deno.writeTextFileSync(s3WriteStringName, Body)
  // const result = await runTfImageCmd(
  //   hostAppHome,
  //   {} as any,
  //   [
  //     'aws',
  //     's3',
  //     'cp',
  //     s3WriteStringName,
  //     `s3://${Bucket}/${Key}`,
  //     '--region',
  //     region,
  //   ],
  //   false,
  // )
  // if (result.exitCode !== 0) {
  //   throw new Error(`Failed to upload s3://${Bucket}/${Key}`)
  // }
  // Deno.removeSync(s3WriteStringName)
}

export const s3UploadFile = async (
  region: string,
  Bucket: string,
  Key: string,
  filePath: string,
  options = {},
) => {
  let Body: Uint8Array | string = Deno.readFileSync(filePath)
  if (options['ContentEncoding'] === 'gzip') {
    Body = await gzip(Body)
  }
  const s3Command = new PutObjectCommand({
    ...options,
    Bucket,
    Key,
    Body,
  })
  debug('upload s3://%s/%s request', Bucket, Key)
  const s3Response = await s3Client(region).send(s3Command)
  debug('upload response', s3Response)
}

export const s3Sync = async (
  src: string,
  targetS3Url: string,
  options: any = {},
) => {
  debug('sync %s to %s %s', src, targetS3Url)
  const image = configGetImage('awscli')

  const s3SyncCmd = [
    'aws',
    's3',
    'sync',
  ]
  if (!debug.enabled) {
    s3SyncCmd.push('--quiet')
  }
  for (const k of Object.keys(options)) {
    if (options[k]) {
      s3SyncCmd.push(`--${k}`)
      s3SyncCmd.push(`"${options[k]}"`)
    }
  }
  s3SyncCmd.push('.')
  s3SyncCmd.push(targetS3Url)
  const dockerVolumnes = [{
    source: src,
    target: src,
  }]
  await runDockerCmd(
    src,
    {},
    dockerVolumnes,
    s3SyncCmd,
    image,
    true,
    [],
  )
}

const temporaryStorageBucket = () => {
  const region = Deno.env.get('TEMPORARY_STORAGE_REGION')
  const bucket = Deno.env.get('TEMPORARY_STORAGE_BUCKET')
  if (!region || !bucket) {
    debug(
      'TEMPORARY_STORAGE_REGION or TEMPORARY_STORAGE_BUCKET is not set',
    )
    return { region: null, bucket: null }
  }
  return { region, bucket }
}

export const temporaryStorageGetFile = async (key: string) => {
  const { region, bucket } = temporaryStorageBucket()
  if (!region || !bucket) {
    return null
  }
  try {
    debug('getting temporary storage file %s', key)
    return await s3GetFile(region, bucket, key)
  } catch (e) {
    debug('Failed to get temporary storage file %s', key, e)
    return null
  }
}

export const temporaryStorageSaveFile = async (key: string, body: string) => {
  const { region, bucket } = temporaryStorageBucket()
  if (!region || !bucket) {
    return null
  }
  return await s3WriteString(region, bucket, key, body)
}

const s3Client = (region: string) => {
  return new S3Client({ region })
}
