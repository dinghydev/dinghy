import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOST_MESSAGE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=sysMLLost;endSize=12;verticalAlign=bottom;',
  },
}

export function LostMessage(props: NodeProps) {
  return (
    <Dependency
      {...LOST_MESSAGE}
      {...props}
      _style={extendStyle(LOST_MESSAGE, props)}
    />
  )
}
