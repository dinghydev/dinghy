import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTOR_PROTECTION_CB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_protection_cb;',
  },
  _width: 27,
  _height: 50,
}

export function MotorProtectionCb(props: NodeProps) {
  return (
    <Shape
      {...MOTOR_PROTECTION_CB}
      {...props}
      _style={extendStyle(MOTOR_PROTECTION_CB, props)}
    />
  )
}
