import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUBLISH_SUBSCRIBE_CHANNEL_2 = {
  _style: {
    entity:
      'rounded=0;endArrow=none;endSize=10;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  },
  _original_width: 1,
  _original_height: 160,
}

export function PublishSubscribeChannel2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUBLISH_SUBSCRIBE_CHANNEL_2}
      {...props}
      _style={extendStyle(PUBLISH_SUBSCRIBE_CHANNEL_2, props)}
    />
  )
}
