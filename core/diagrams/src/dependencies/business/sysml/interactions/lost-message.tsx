import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOST_MESSAGE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=sysMLLost;endSize=12;verticalAlign=bottom;',
  },
}

export function LostMessage(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, LOST_MESSAGE)} />
}
