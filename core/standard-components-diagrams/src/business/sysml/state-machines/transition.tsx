import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSITION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;strokeWidth=3;verticalAlign=bottom;',
  },
}

export function Transition(props: DiagramNodeProps) {
  return (
    <Dependency
      {...TRANSITION}
      {...props}
      _style={extendStyle(TRANSITION, props)}
    />
  )
}
