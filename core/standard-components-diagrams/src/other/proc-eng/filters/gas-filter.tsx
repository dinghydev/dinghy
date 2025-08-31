import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter;',
  },
  _width: 50,
  _height: 100,
}

export function GasFilter(props: DiagramNodeProps) {
  return (
    <Shape {...GAS_FILTER} {...props} _style={extendStyle(GAS_FILTER, props)} />
  )
}
