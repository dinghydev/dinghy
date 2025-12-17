import * as yaml from '@std/yaml'

import Debug from 'debug'
import { s3GetFile } from './s3.ts'
const debug = Debug('loadUrlData')
export async function loadUrlData(url: string): Promise<any> {
  debug('loading from %s', url)
  let fetchUrl = url
  const fetchOptions: RequestInit = {}
  try {
    const urlObj = new URL(url)
    if (urlObj.username || urlObj.password) {
      const credentials = `${decodeURIComponent(urlObj.username)}:${
        decodeURIComponent(urlObj.password)
      }`
      const encoded = btoa(credentials)
      fetchOptions.headers = {
        ...fetchOptions.headers,
        'Authorization': `Basic ${encoded}`,
      }
      // remove credentials from url
      urlObj.username = ''
      urlObj.password = ''
      fetchUrl = urlObj.toString()
    }
  } catch (_e) {
    // ignore parse error, fallback to original url
  }
  let response: Response
  if (fetchUrl.startsWith('file://')) {
    // Read from local filesystem for file:// URLs
    const localPath = fetchUrl.replace('file://', '')
    try {
      const fileData = Deno.readTextFileSync(localPath)
      response = new Response(fileData, { status: 200 })
    } catch (err) {
      response = new Response(`Could not read file: ${err}`, {
        status: 500,
      })
    }
  } else if (fetchUrl.includes('.amazonaws.com/')) {
    // The following S3 URLs are supported and parsed:
    //
    // 1. https://my-bucket.s3.us-west-2.amazonaws.com/my-folder/config.yaml
    //      - bucket: my-bucket
    //      - region: us-west-2
    //      - key: my-folder/config.yaml
    // 2. https://s3.us-west-2.amazonaws.com/bucket/my-folder/config.json
    //      - bucket: bucket
    //      - region: us-west-2
    //      - key: my-folder/config.json
    //
    // You may add more patterns as needed.

    // Pattern 1: <bucket>.s3.<region>.amazonaws.com/<key>
    // Pattern 2: s3.<region>.amazonaws.com/<bucket>/<key>
    let bucket = ''
    let region = ''
    let key = ''
    // Try pattern 1
    let match = fetchUrl.match(
      /^https:\/\/([^.]+)\.s3[.-]([a-z0-9-]+)\.amazonaws\.com\/(.+)$/,
    )
    if (match) {
      bucket = match[1]
      region = match[2]
      key = match[3]
    } else {
      // Try pattern 2
      match = fetchUrl.match(
        /^https:\/\/s3[.-]([a-z0-9-]+)\.amazonaws\.com\/([^\/]+)\/(.+)$/,
      )
      if (match) {
        region = match[1]
        bucket = match[2]
        key = match[3]
      } else {
        throw new Error(`Could not parse S3 URL: ${fetchUrl}`)
      }
    }
    const body = await s3GetFile(region, bucket, key)
    response = new Response(body, { status: 200 })
  } else {
    response = await fetch(fetchUrl, fetchOptions)
  }
  if (!response.ok) {
    throw new Error(
      `Failed to load config from ${url}: ${response.statusText}`,
    )
  }
  const configText = await response.text()
  let config = null
  if (url.endsWith('.yaml') || url.endsWith('.yml')) {
    config = yaml.parse(configText) as any
  } else {
    config = JSON.parse(configText)
  }
  return config
}
