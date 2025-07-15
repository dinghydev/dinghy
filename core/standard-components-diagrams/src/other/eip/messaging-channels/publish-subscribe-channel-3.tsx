import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUBLISH_SUBSCRIBE_CHANNEL_3 = {
  _style:
    'rounded=0;edgeStyle=orthogonalEdgeStyle;endArrow=block;endSize=10;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  _width: 2,
  _height: 160,
}

export function PublishSubscribeChannel3(props: DiagramNodeProps) {
  return <Shape {...PUBLISH_SUBSCRIBE_CHANNEL_3} {...props} />
}
