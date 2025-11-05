import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const U_SHAPED_TUBES_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.u_shaped_tubes_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 30,
}

export function UShapedTubesHeatExchanger(props: NodeProps) {
  return (
    <Shape
      {...U_SHAPED_TUBES_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(U_SHAPED_TUBES_HEAT_EXCHANGER, props)}
    />
  )
}
