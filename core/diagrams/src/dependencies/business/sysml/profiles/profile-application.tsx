import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROFILE_APPLICATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;',
  },
}

export function ProfileApplication(props: NodeProps) {
  return (
    <Dependency
      {...PROFILE_APPLICATION}
      {...props}
      _style={extendStyle(PROFILE_APPLICATION, props)}
    />
  )
}
