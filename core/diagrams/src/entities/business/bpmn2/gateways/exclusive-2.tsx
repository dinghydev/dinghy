import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCLUSIVE_2 = {
  _style: {
    entity:
      'points=[[0.25,0.25,0],[0.5,0,0],[0.75,0.25,0],[1,0.5,0],[0.75,0.75,0],[0.5,1,0],[0.25,0.75,0],[0,0.5,0]];shape=mxgraph.bpmn.gateway2;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;outlineConnect=0;outline=none;symbol=none;gwType=exclusive;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Exclusive2(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCLUSIVE_2}
      {...props}
      _style={extendStyle(EXCLUSIVE_2, props)}
    />
  )
}
