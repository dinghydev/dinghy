import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNAL_START_NON_INTERRUPTING = {
  _style: {
    entity:
      'points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];shape=mxgraph.bpmn.event;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=ellipsePerimeter;outlineConnect=0;aspect=fixed;outline=eventNonint;symbol=signal;',
  },
  _width: 60,
  _height: 60,
}

export function SignalStartNonInterrupting(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNAL_START_NON_INTERRUPTING}
      {...props}
      _style={extendStyle(SIGNAL_START_NON_INTERRUPTING, props)}
    />
  )
}
