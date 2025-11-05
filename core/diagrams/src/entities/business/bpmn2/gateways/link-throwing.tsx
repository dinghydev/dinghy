import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINK_THROWING = {
  _style: {
    entity:
      'points=[[0.25,0.25,0],[0.5,0,0],[0.75,0.25,0],[1,0.5,0],[0.75,0.75,0],[0.5,1,0],[0.25,0.75,0],[0,0.5,0]];shape=mxgraph.bpmn.gateway2;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;outlineConnect=0;outline=throwing;symbol=link;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LinkThrowing(props: NodeProps) {
  return (
    <Shape
      {...LINK_THROWING}
      {...props}
      _style={extendStyle(LINK_THROWING, props)}
    />
  )
}
