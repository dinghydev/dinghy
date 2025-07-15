import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUBLISH_SUBSCRIBE_CHANNEL = {
  _style: 'strokeWidth=2;dashed=0;align=center;fontSize=8;html=1;shape=rect;',
  _width: 80,
  _height: 160,
}

export function PublishSubscribeChannel(props: DiagramNodeProps) {
  return <Shape {...PUBLISH_SUBSCRIBE_CHANNEL} {...props} />
}
