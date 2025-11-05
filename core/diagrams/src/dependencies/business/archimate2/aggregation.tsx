import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGGREGATION = {
  _style: {
    dependency:
      'endArrow=none;html=1;endFill=0;startArrow=diamondThin;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical',
  },
}

export function Aggregation(props: NodeProps) {
  return (
    <Dependency
      {...AGGREGATION}
      {...props}
      _style={extendStyle(AGGREGATION, props)}
    />
  )
}
