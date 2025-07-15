import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_FILTER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter;',
  _width: 50,
  _height: 100,
}

export function LiquidFilter(props: DiagramNodeProps) {
  return <Shape {...LIQUID_FILTER} {...props} />
}
