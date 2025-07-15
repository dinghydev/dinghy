import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_FILTER_FIXED_BED = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter_(fixed_bed);',
  _width: 50,
  _height: 100,
}

export function GasFilterFixedBed(props: DiagramNodeProps) {
  return <Shape {...GAS_FILTER_FIXED_BED} {...props} />
}
