import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSOCIATION = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endFill=0;startFill=0;endSize=6;startSize=6;dashed=1;dashPattern=1 4;endArrow=none;startArrow=none;',
  },
}

export function Association(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ASSOCIATION}
      {...props}
      _style={extendStyle(ASSOCIATION, props)}
    />
  )
}
