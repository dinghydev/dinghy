import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPOSITION = {
  _style: {
    dependency:
      'html=1;startArrow=diamondThin;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical;startSize=10;endArrow=none;endFill=0;',
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
