// import {
//   GetObjectCommand,
//   PutObjectCommand,
//   // S3Client,
// } from '@aws-sdk/client-s3'

import Debug from 'debug'
import { sleep } from './timeUtils.ts'
import { hostAppHome } from '@diac/cli'
import { runTfImageCmd } from '../commands/tf/runTfImageCmd.ts'
const debug = Debug('aws:s3')

export const s3GetFile = async (
  region: string,
  Bucket: string,
  Key: string,
) => {
  // const s3Command = new GetObjectCommand({
  //   Bucket,
  //   Key,
  // })
  debug('download s3://%s/%s request1', Bucket, Key)
  // debug("waiting for 50 minutes");
  // await sleep(50 * 60 * 1000);
  debug('download s3://%s/%s request2', Bucket, Key)
  debug('download s3://%s/%s request', Bucket, Key)
  // TODO: download via S3 API
  // const s3Response = await s3Client(region).send(s3Command);
  // const body = await s3Response.Body!.transformToString("utf-8");

  const s3GetFileName = `${hostAppHome}/s3GetFile`
  const result = await runTfImageCmd(
    hostAppHome,
    {} as any,
    [
      'aws',
      's3',
      'cp',
      `s3://${Bucket}/${Key}`,
      s3GetFileName,
      '--region',
      region,
    ],
    false,
  )
  if (result.exitCode !== 0) {
    debug('Failed to download s3://%s/%s', Bucket, Key)
    return null
  }
  const body = Deno.readTextFileSync(s3GetFileName)
  Deno.removeSync(s3GetFileName)
  debug('download response: %s', body)
  return body
}

export const s3WriteString = async (
  region: string,
  Bucket: string,
  Key: string,
  Body: string,
  _options = {},
) => {
  // const s3Command = new PutObjectCommand({
  //   ...options,
  //   Bucket,
  //   Key,
  //   Body,
  // })
  debug('upload s3://%s/%s request1', Bucket, Key)
  await sleep(1000)
  debug('upload s3://%s/%s request2', Bucket, Key)
  // const s3Response = await s3Client(region).send(s3Command);
  // debug("upload response", s3Response);

  const s3WriteStringName = `${hostAppHome}/s3WriteString`
  Deno.writeTextFileSync(s3WriteStringName, Body)
  const result = await runTfImageCmd(
    hostAppHome,
    {} as any,
    [
      'aws',
      's3',
      'cp',
      s3WriteStringName,
      `s3://${Bucket}/${Key}`,
      '--region',
      region,
    ],
    false,
  )
  if (result.exitCode !== 0) {
    throw new Error(`Failed to upload s3://${Bucket}/${Key}`)
  }
  Deno.removeSync(s3WriteStringName)
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

// const s3Client = (region: string) => {
//   return new S3Client({ region })
// }
