import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSITION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;strokeWidth=3;verticalAlign=bottom;',
  },
}

export function Transition(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, TRANSITION)} />
}
