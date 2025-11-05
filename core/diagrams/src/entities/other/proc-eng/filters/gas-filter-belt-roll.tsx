import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAS_FILTER_BELT_ROLL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter_(belt,_roll);',
  },
  _width: 50,
  _height: 100,
}

export function GasFilterBeltRoll(props: NodeProps) {
  return (
    <Shape
      {...GAS_FILTER_BELT_ROLL}
      {...props}
      _style={extendStyle(GAS_FILTER_BELT_ROLL, props)}
    />
  )
}
