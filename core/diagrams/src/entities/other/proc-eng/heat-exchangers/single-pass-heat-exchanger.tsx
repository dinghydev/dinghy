import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_PASS_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.single_pass_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 90,
  _height: 30,
}

export function SinglePassHeatExchanger(props: NodeProps) {
  return (
    <Shape
      {...SINGLE_PASS_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(SINGLE_PASS_HEAT_EXCHANGER, props)}
    />
  )
}
