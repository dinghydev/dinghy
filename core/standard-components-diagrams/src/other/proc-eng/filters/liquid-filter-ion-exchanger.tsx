import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIQUID_FILTER_ION_EXCHANGER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.filters.liquid_filter_(ion_exchanger);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function LiquidFilterIonExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_ION_EXCHANGER}
      {...props}
      _style={extendStyle(LIQUID_FILTER_ION_EXCHANGER, props)}
    />
  )
}
