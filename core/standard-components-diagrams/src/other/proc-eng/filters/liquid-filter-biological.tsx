import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_FILTER_BIOLOGICAL = {
  _style:
    'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.filters.liquid_filter_(biological);',
  _width: 50,
  _height: 100,
}

export function LiquidFilterBiological(props: DiagramNodeProps) {
  return <Shape {...LIQUID_FILTER_BIOLOGICAL} {...props} />
}
