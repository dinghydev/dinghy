import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_FILTER_HEPA = {
  _style:
    'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.filters.gas_filter_(hepa);',
  _width: 50,
  _height: 100,
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
