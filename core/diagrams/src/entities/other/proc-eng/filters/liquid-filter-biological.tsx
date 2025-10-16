import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_BIOLOGICAL = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.filters.liquid_filter_(biological);',
  },
  _width: 50,
  _height: 100,
}

export function LiquidFilterBiological(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_BIOLOGICAL}
      {...props}
      _style={extendStyle(LIQUID_FILTER_BIOLOGICAL, props)}
    />
  )
}
