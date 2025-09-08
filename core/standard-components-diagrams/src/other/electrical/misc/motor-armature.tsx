import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOTOR_ARMATURE = {
  _style: {
    entity:
      'shape=mxgraph.electrical.electro-mechanical.motor_2;html=1;shadow=0;dashed=0;align=center;fontSize=30;strokeWidth=1;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function MotorArmature(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTOR_ARMATURE}
      {...props}
      _style={extendStyle(MOTOR_ARMATURE, props)}
    />
  )
}
