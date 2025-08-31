import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLE_INTERMEDIATE_CATCHING = {
  _style:
    'points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];shape=mxgraph.bpmn.event;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=ellipsePerimeter;outlineConnect=0;aspect=fixed;outline=catching;symbol=multiple;',
  _width: 60,
  _height: 60,
}

export function MultipleIntermediateCatching(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIPLE_INTERMEDIATE_CATCHING}
      {...props}
      _style={extendStyle(MULTIPLE_INTERMEDIATE_CATCHING, props)}
    />
  )
}
