import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVO = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.servo;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 84,
  _original_height: 60,
}

export function Servo(props: DiagramNodeProps) {
  return <Shape {...SERVO} {...props} _style={extendStyle(SERVO, props)} />
}
