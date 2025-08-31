import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DUAL_GATE_MOSFET_N = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.dual_gate_mosfet_n;',
  _width: 95,
  _height: 100,
}

export function DualGateMosfetN(props: DiagramNodeProps) {
  return (
    <Shape
      {...DUAL_GATE_MOSFET_N}
      {...props}
      _style={extendStyle(DUAL_GATE_MOSFET_N, props)}
    />
  )
}
