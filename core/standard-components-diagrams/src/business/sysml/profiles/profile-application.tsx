import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROFILE_APPLICATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;',
  },
}

export function ProfileApplication(props: DiagramNodeProps) {
  return (
    <Dependency
      {...PROFILE_APPLICATION}
      {...props}
      _style={extendStyle(PROFILE_APPLICATION, props)}
    />
  )
}
