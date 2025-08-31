import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const U_TUBE_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.u-tube_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 91,
  _height: 30,
}

export function UTubeHeatExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...U_TUBE_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(U_TUBE_HEAT_EXCHANGER, props)}
    />
  )
}
