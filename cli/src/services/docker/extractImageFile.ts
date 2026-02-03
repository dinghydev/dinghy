import Debug from 'debug'
import { execaSync } from 'execa'
import { dirname } from 'node:path'
import { cmdStream } from '../../utils/cmd.ts'
const debug = Debug('extractImageFile')

export async function extractImageFile(
  image: string,
  workingDir: string,
  sourceFile: string,
  targetFile: string,
) {
  const targetFilePath = `${workingDir}/${targetFile}`
  const targetFileBaseDir = dirname(targetFilePath)
  Deno.mkdirSync(targetFileBaseDir, { recursive: true })
  await cmdStream(
    [
      'docker',
      'run',
      '--user',
      `${execaSync`id -u`.stdout}:${execaSync`id -g`.stdout}`,
      '-v',
      `${workingDir}:/output`,
      '--rm',
      '--entrypoint',
      'cp',
      image,
      '--no-preserve=ownership',
      sourceFile,
      `/output/${targetFile}`,
    ],
    true,
  )

  debug('Extracted docker image file %s', targetFilePath)
}
