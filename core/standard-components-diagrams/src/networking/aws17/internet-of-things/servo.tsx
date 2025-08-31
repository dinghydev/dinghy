import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVO = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.servo;fillColor=#5294CF;gradientColor=none;',
  _width: 84,
  _height: 60,
}

export function Servo(props: DiagramNodeProps) {
  return <Shape {...SERVO} {...props} _style={extendStyle(SERVO, props)} />
}
