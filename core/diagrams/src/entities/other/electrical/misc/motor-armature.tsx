import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTOR_ARMATURE = {
  _style: {
    entity:
      'shape=mxgraph.electrical.electro-mechanical.motor_2;html=1;shadow=0;dashed=0;align=center;fontSize=30;strokeWidth=1;',
  },
  _width: 100,
  _height: 60,
}

export function MotorArmature(props: NodeProps) {
  return (
    <Shape
      {...MOTOR_ARMATURE}
      {...props}
      _style={extendStyle(MOTOR_ARMATURE, props)}
    />
  )
}
