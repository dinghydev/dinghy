import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_ENDPOINT_4 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;strokeWidth=2;rounded=0;endArrow=block;startArrow=none;startSize=10;endSize=10;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  },
  _original_width: 2,
  _original_height: 90,
}

export function MessageEndpoint4(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_ENDPOINT_4}
      {...props}
      _style={extendStyle(MESSAGE_ENDPOINT_4, props)}
    />
  )
}
