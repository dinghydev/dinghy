import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_FILTER_FIXED_BED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter_(fixed_bed);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function GasFilterFixedBed(props: DiagramNodeProps) {
  return (
    <Shape
      {...GAS_FILTER_FIXED_BED}
      {...props}
      _style={extendStyle(GAS_FILTER_FIXED_BED, props)}
    />
  )
}
