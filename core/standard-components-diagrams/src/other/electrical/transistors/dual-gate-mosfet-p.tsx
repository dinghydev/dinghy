import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DUAL_GATE_MOSFET_P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.dual_gate_mosfet_p;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function DualGateMosfetP(props: DiagramNodeProps) {
  return (
    <Shape
      {...DUAL_GATE_MOSFET_P}
      {...props}
      _style={extendStyle(DUAL_GATE_MOSFET_P, props)}
    />
  )
}
