import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIPLE_INTERMEDIATE_BOUNDARY_INTERRUPTING = {
  _style:
    'points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];shape=mxgraph.bpmn.event;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=ellipsePerimeter;outlineConnect=0;aspect=fixed;outline=boundInt;symbol=multiple;',
  _width: 50,
  _height: 50,
}

export function MultipleIntermediateBoundaryInterrupting(
  props: DiagramNodeProps,
) {
  return <Shape {...MULTIPLE_INTERMEDIATE_BOUNDARY_INTERRUPTING} {...props} />
}
