import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AGGREGATION = {
  _style: {
    dependency:
      'html=1;startArrow=diamondThin;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;startSize=10;endArrow=none;endFill=0;',
  },
}

export function Aggregation(props: DiagramNodeProps) {
  return (
    <Dependency
      {...AGGREGATION}
      {...props}
      _style={extendStyle(AGGREGATION, props)}
    />
  )
}
