import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVO = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.servo;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 84,
  _height: 60,
}

export function Servo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVO)} />
}
