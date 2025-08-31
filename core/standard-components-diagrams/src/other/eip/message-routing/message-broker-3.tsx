import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_BROKER_3 = {
  _style: 'edgeStyle=none;endArrow=none;dashed=0;html=1;strokeWidth=2;',
  _width: 7,
  _height: 90,
}

export function MessageBroker3(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_BROKER_3}
      {...props}
      _style={extendStyle(MESSAGE_BROKER_3, props)}
    />
  )
}
