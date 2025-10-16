import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPOSITION = {
  _style: {
    dependency:
      'endArrow=none;html=1;endFill=0;startArrow=diamondThin;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical',
  },
}

export function Composition(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPOSITION}
      {...props}
      _style={extendStyle(COMPOSITION, props)}
    />
  )
}
