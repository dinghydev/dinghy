import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const U_SHAPED_TUBES_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.u_shaped_tubes_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function UShapedTubesHeatExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...U_SHAPED_TUBES_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(U_SHAPED_TUBES_HEAT_EXCHANGER, props)}
    />
  )
}
