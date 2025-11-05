import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEQUENCE_FLOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;',
  },
}

export function SequenceFlow(props: NodeProps) {
  return (
    <Dependency
      {...SEQUENCE_FLOW}
      {...props}
      _style={extendStyle(SEQUENCE_FLOW, props)}
    />
  )
}
