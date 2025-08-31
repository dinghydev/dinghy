import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGGREGATION = {
  _style: {
    dependency:
      'endArrow=none;html=1;endFill=0;startArrow=diamondThin;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical',
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
