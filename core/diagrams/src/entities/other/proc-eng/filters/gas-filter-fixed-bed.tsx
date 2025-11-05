import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAS_FILTER_FIXED_BED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter_(fixed_bed);',
  },
  _width: 50,
  _height: 100,
}

export function GasFilterFixedBed(props: NodeProps) {
  return (
    <Shape
      {...GAS_FILTER_FIXED_BED}
      {...props}
      _style={extendStyle(GAS_FILTER_FIXED_BED, props)}
    />
  )
}
