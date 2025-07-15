import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_BROKER_3 = {
  _style: 'edgeStyle=none;endArrow=none;dashed=0;html=1;strokeWidth=2;',
  _width: 7,
  _height: 90,
}

export function MessageBroker3(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_BROKER_3} {...props} />
}
