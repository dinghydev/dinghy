import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOTORIZED_SWITCH_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motorized_switch_3p;',
  },
  _original_width: 85,
  _original_height: 70,
}

export function MotorizedSwitch3p(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTORIZED_SWITCH_3P}
      {...props}
      _style={extendStyle(MOTORIZED_SWITCH_3P, props)}
    />
  )
}
