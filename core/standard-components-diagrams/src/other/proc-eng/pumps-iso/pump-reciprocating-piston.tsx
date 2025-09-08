import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUMP_RECIPROCATING_PISTON = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.pump_(reciprocating_piston);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PumpReciprocatingPiston(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUMP_RECIPROCATING_PISTON}
      {...props}
      _style={extendStyle(PUMP_RECIPROCATING_PISTON, props)}
    />
  )
}
