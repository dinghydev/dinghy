import { existsSync } from '@std/fs/exists'
import { HOST_USER_HOME_PATH } from '../../utils/dockerUtils.ts'
import { hostAppHome, isInsideContainer } from '../../shared/home.ts'
import Debug from 'debug'
const debug = Debug('dinghy:skill')

const DINGHY_SKILL_MARKER = 'dinghy-slide'

export const resolveDinghySkills = (): {
  dinghySkills: string | undefined
  localSkills: string
  userSkills: string
} => {
  const localSkills = `${hostAppHome}/.claude/skills`
  const userSkills = `${
    isInsideContainer ? HOST_USER_HOME_PATH : Deno.env.get('HOME')
  }/.claude/skills`
  let dinghySkills
  if (existsSync(`${localSkills}/${DINGHY_SKILL_MARKER}`)) {
    dinghySkills = localSkills
    debug('Found dinghy local skills folder at %s', localSkills)
  } else if (existsSync(`${userSkills}/${DINGHY_SKILL_MARKER}`)) {
    dinghySkills = userSkills
    debug('Found dinghy user skills folder at %s', userSkills)
  }
  return { dinghySkills, localSkills, userSkills }
}
