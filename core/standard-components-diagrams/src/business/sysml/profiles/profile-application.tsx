import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROFILE_APPLICATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;',
  },
}

export function ProfileApplication(props: DiagramNodeProps) {
  return <Dependency {...PROFILE_APPLICATION} {...props} />
}
