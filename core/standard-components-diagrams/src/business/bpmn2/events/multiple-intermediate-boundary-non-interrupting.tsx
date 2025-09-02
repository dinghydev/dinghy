import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLE_INTERMEDIATE_BOUNDARY_NON_INTERRUPTING = {
  _style: {
    entity:
      'points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];shape=mxgraph.bpmn.event;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=ellipsePerimeter;outlineConnect=0;aspect=fixed;outline=boundNonint;symbol=multiple;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function MultipleIntermediateBoundaryNonInterrupting(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...MULTIPLE_INTERMEDIATE_BOUNDARY_NON_INTERRUPTING}
      {...props}
      _style={extendStyle(
        MULTIPLE_INTERMEDIATE_BOUNDARY_NON_INTERRUPTING,
        props,
      )}
    />
  )
}
