import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELECTRICAL_MOTOR = {
  _style: {
    entity:
      'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=35;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ElectricalMotor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ELECTRICAL_MOTOR)} />
}
