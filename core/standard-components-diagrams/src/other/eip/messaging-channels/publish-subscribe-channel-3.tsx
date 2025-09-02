import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUBLISH_SUBSCRIBE_CHANNEL_3 = {
  _style: {
    entity:
      'rounded=0;edgeStyle=orthogonalEdgeStyle;endArrow=block;endSize=10;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  },
  _original_width: 2,
  _original_height: 160,
}

export function PublishSubscribeChannel3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUBLISH_SUBSCRIBE_CHANNEL_3}
      {...props}
      _style={extendStyle(PUBLISH_SUBSCRIBE_CHANNEL_3, props)}
    />
  )
}
