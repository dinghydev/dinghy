import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFAULT_SEQUENCE_FLOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=dash;startFill=0;endSize=6;startSize=6;',
  },
}

export function DefaultSequenceFlow(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, DEFAULT_SEQUENCE_FLOW)} />
  )
}
