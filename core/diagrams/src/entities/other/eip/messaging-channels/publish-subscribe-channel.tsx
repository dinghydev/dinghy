import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUBLISH_SUBSCRIBE_CHANNEL = {
  _style: {
    entity: 'strokeWidth=2;dashed=0;align=center;fontSize=8;html=1;shape=rect;',
  },
  _width: 80,
  _height: 160,
}

export function PublishSubscribeChannel(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PUBLISH_SUBSCRIBE_CHANNEL)} />
  )
}
