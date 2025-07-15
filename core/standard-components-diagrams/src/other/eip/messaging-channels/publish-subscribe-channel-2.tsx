import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUBLISH_SUBSCRIBE_CHANNEL_2 = {
  _style:
    'rounded=0;endArrow=none;endSize=10;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  _width: 1,
  _height: 160,
}

export function PublishSubscribeChannel2(props: DiagramNodeProps) {
  return <Shape {...PUBLISH_SUBSCRIBE_CHANNEL_2} {...props} />
}
