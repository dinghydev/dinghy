import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIGNAL_BOUNDARY_NON_INTERRUPTING = {
  _style: {
    entity:
      'points=[[0.25,0.25,0],[0.5,0,0],[0.75,0.25,0],[1,0.5,0],[0.75,0.75,0],[0.5,1,0],[0.25,0.75,0],[0,0.5,0]];shape=mxgraph.bpmn.gateway2;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;outlineConnect=0;outline=boundNonint;symbol=signal;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SignalBoundaryNonInterrupting(props: NodeProps) {
  return (
    <Shape
      {...SIGNAL_BOUNDARY_NON_INTERRUPTING}
      {...props}
      _style={extendStyle(SIGNAL_BOUNDARY_NON_INTERRUPTING, props)}
    />
  )
}
