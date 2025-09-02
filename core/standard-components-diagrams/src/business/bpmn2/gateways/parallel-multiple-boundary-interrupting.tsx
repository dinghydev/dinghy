import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARALLEL_MULTIPLE_BOUNDARY_INTERRUPTING = {
  _style: {
    entity:
      'points=[[0.25,0.25,0],[0.5,0,0],[0.75,0.25,0],[1,0.5,0],[0.75,0.75,0],[0.5,1,0],[0.25,0.75,0],[0,0.5,0]];shape=mxgraph.bpmn.gateway2;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;outlineConnect=0;outline=boundInt;symbol=parallelMultiple;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ParallelMultipleBoundaryInterrupting(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARALLEL_MULTIPLE_BOUNDARY_INTERRUPTING}
      {...props}
      _style={extendStyle(PARALLEL_MULTIPLE_BOUNDARY_INTERRUPTING, props)}
    />
  )
}
