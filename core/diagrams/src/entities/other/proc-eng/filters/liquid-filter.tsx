import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter;',
  },
  _width: 50,
  _height: 100,
}

export function LiquidFilter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIQUID_FILTER)} />
}
