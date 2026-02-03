import { cmdCode, cmdStream } from '../../utils/cmd.ts'
import { DinghyError } from '../../types.ts'

export async function imagePull(image: string, required = false) {
  const { success } = await cmdStream(
    `docker pull ${image}`,
  )
  if (!success && required) {
    throw new DinghyError(`Failed to pull image ${image}`)
  }
  return success
}

export async function imageExistLocally(image: string) {
  const { success } = await cmdCode(`docker image inspect ${image}`)
  return success
}

export async function imageExistRemotely(image: string) {
  const { success } = await cmdCode(['docker', 'manifest', 'inspect', image])
  return success
}
