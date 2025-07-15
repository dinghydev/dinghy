import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_ENDPOINT_4 = {
  _style:
    'edgeStyle=elbowEdgeStyle;strokeWidth=2;rounded=0;endArrow=block;startArrow=none;startSize=10;endSize=10;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  _width: 2,
  _height: 90,
}

export function MessageEndpoint4(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_ENDPOINT_4} {...props} />
}
