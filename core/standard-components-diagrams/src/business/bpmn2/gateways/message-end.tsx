import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_END = {
  _style: {
    entity:
      'points=[[0.25,0.25,0],[0.5,0,0],[0.75,0.25,0],[1,0.5,0],[0.75,0.75,0],[0.5,1,0],[0.25,0.75,0],[0,0.5,0]];shape=mxgraph.bpmn.gateway2;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;outlineConnect=0;outline=end;symbol=message;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function MessageEnd(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_END}
      {...props}
      _style={extendStyle(MESSAGE_END, props)}
    />
  )
}
