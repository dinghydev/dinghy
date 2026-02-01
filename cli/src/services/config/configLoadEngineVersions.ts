import { configGetEngineVersion } from '../../utils/dockerConfig.ts'
import {
  loadVersionsFromFile,
  projectVersionRelease,
} from '../../utils/projectVersions.ts'
import { hostAppHome } from '../../shared/home.ts'
import { configGetEngineImage } from './configGetEngineImage.ts'
import { extractImageFile } from '../docker/extractImageFile.ts'

export const configLoadEngineVersions = async () => {
  const cliVersion = projectVersionRelease()
  const engineVersion = configGetEngineVersion()
  if (cliVersion !== engineVersion) {
    await extractImageFile(
      await configGetEngineImage(),
      hostAppHome,
      '/dinghy/.versions.json',
      '.versions.json',
    )
    const versionsFile = `${hostAppHome}/.versions.json`
    loadVersionsFromFile(versionsFile)
    Deno.removeSync(versionsFile)
  }
}
