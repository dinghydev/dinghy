import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_BROKER = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#fffbc0;strokeColor=#000000;',
  _width: 120,
  _height: 90,
}

export function MessageBroker(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_BROKER} {...props} />
}
