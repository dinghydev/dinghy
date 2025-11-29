import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELECTRIC_MOTOR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.electric_motor;fontSize=45;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ElectricMotor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ELECTRIC_MOTOR)} />
}
