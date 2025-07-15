import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIPLE_INTERRUPTING = {
  _style:
    'points=[[0.25,0.25,0],[0.5,0,0],[0.75,0.25,0],[1,0.5,0],[0.75,0.75,0],[0.5,1,0],[0.25,0.75,0],[0,0.5,0]];shape=mxgraph.bpmn.gateway2;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;outlineConnect=0;outline=eventInt;symbol=multiple;',
  _width: 50,
  _height: 50,
}

export function MultipleInterrupting(props: DiagramNodeProps) {
  return <Shape {...MULTIPLE_INTERRUPTING} {...props} />
}
