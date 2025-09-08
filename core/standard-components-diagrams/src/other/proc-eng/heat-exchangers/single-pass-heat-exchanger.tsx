import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_PASS_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.single_pass_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 90,
  _original_height: 30,
}

export function SinglePassHeatExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_PASS_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(SINGLE_PASS_HEAT_EXCHANGER, props)}
    />
  )
}
