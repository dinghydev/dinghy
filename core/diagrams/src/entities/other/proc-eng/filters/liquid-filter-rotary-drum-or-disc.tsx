import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_ROTARY_DRUM_OR_DISC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter_(rotary,_drum_or_disc);',
  },
  _width: 50,
  _height: 100,
}

export function LiquidFilterRotaryDrumOrDisc(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_ROTARY_DRUM_OR_DISC}
      {...props}
      _style={extendStyle(LIQUID_FILTER_ROTARY_DRUM_OR_DISC, props)}
    />
  )
}
