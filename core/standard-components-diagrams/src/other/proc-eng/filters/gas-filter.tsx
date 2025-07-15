import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_FILTER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter;',
  _width: 50,
  _height: 100,
}

export function GasFilter(props: DiagramNodeProps) {
  return <Shape {...GAS_FILTER} {...props} />
}
