import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTORIZED_SWITCH_4P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motorized_switch_4p;',
  },
  _width: 100,
  _height: 70,
}

export function MotorizedSwitch4p(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOTORIZED_SWITCH_4P)} />
}
