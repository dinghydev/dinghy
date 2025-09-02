import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_FILTER_BELT_ROLL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter_(belt,_roll);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function GasFilterBeltRoll(props: DiagramNodeProps) {
  return (
    <Shape
      {...GAS_FILTER_BELT_ROLL}
      {...props}
      _style={extendStyle(GAS_FILTER_BELT_ROLL, props)}
    />
  )
}
