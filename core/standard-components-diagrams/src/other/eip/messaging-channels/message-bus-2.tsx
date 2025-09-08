import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE_BUS_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;strokeWidth=2;rounded=0;endArrow=block;startArrow=block;startSize=10;endSize=10;dashed=0;html=1;strokeColor=#808080;',
  },
  _original_width: 1,
  _original_height: 140,
}

export function MessageBus2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_BUS_2}
      {...props}
      _style={extendStyle(MESSAGE_BUS_2, props)}
    />
  )
}
