import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAS_FILTER_HEPA = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.filters.gas_filter_(hepa);',
  },
  _width: 50,
  _height: 100,
}

export function GasFilterHepa(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GAS_FILTER_HEPA)} />
}
