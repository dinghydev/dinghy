import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAS_FILTER_HEPA = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.filters.gas_filter_(hepa);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function GasFilterHepa(props: DiagramNodeProps) {
  return (
    <Shape
      {...GAS_FILTER_HEPA}
      {...props}
      _style={extendStyle(GAS_FILTER_HEPA, props)}
    />
  )
}
