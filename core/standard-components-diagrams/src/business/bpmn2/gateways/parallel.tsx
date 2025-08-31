import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARALLEL = {
  _style: {
    entity:
      'points=[[0.25,0.25,0],[0.5,0,0],[0.75,0.25,0],[1,0.5,0],[0.75,0.75,0],[0.5,1,0],[0.25,0.75,0],[0,0.5,0]];shape=mxgraph.bpmn.gateway2;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;outlineConnect=0;outline=none;symbol=none;gwType=parallel;',
  },
  _width: 60,
  _height: 60,
}

export function Parallel(props: DiagramNodeProps) {
  return (
    <Shape {...PARALLEL} {...props} _style={extendStyle(PARALLEL, props)} />
  )
}
