import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUBLISH_SUBSCRIBE_CHANNEL = {
  _style: {
    entity: 'strokeWidth=2;dashed=0;align=center;fontSize=8;html=1;shape=rect;',
  },
  _original_width: 80,
  _original_height: 160,
}

export function PublishSubscribeChannel(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUBLISH_SUBSCRIBE_CHANNEL}
      {...props}
      _style={extendStyle(PUBLISH_SUBSCRIBE_CHANNEL, props)}
    />
  )
}
