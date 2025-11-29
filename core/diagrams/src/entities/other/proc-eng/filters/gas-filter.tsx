import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAS_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter;',
  },
  _width: 50,
  _height: 100,
}

export function GasFilter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GAS_FILTER)} />
}
