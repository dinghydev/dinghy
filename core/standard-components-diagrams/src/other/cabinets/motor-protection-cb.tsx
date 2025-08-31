import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOTOR_PROTECTION_CB = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_protection_cb;',
  _width: 27,
  _height: 50,
}

export function MotorProtectionCb(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTOR_PROTECTION_CB}
      {...props}
      _style={extendStyle(MOTOR_PROTECTION_CB, props)}
    />
  )
}
