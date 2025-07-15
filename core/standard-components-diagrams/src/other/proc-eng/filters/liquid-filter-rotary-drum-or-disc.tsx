import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_FILTER_ROTARY_DRUM_OR_DISC = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter_(rotary,_drum_or_disc);',
  _width: 50,
  _height: 100,
}

export function LiquidFilterRotaryDrumOrDisc(props: DiagramNodeProps) {
  return <Shape {...LIQUID_FILTER_ROTARY_DRUM_OR_DISC} {...props} />
}
