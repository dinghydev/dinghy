import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_ION_EXCHANGER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.filters.liquid_filter_(ion_exchanger);',
  },
  _width: 50,
  _height: 100,
}

export function LiquidFilterIonExchanger(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, LIQUID_FILTER_ION_EXCHANGER)}
    />
  )
}
