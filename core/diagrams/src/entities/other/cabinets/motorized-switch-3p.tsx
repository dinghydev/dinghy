import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTORIZED_SWITCH_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motorized_switch_3p;',
  },
  _original_width: 85,
  _original_height: 70,
}

export function MotorizedSwitch3p(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOTORIZED_SWITCH_3P)} />
}
