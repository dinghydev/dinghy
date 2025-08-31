import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COVERED_GAS_VENT = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.covered_gas_vent;pointerEvents=1;',
  _width: 80,
  _height: 100,
}

export function CoveredGasVent(props: DiagramNodeProps) {
  return (
    <Shape
      {...COVERED_GAS_VENT}
      {...props}
      _style={extendStyle(COVERED_GAS_VENT, props)}
    />
  )
}
