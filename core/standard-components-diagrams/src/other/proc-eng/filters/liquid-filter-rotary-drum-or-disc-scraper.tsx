import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_ROTARY_DRUM_OR_DISC_SCRAPER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter_(rotary,_drum_or_disc,_scraper);',
  },
  _width: 55,
  _height: 100,
}

export function LiquidFilterRotaryDrumOrDiscScraper(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_ROTARY_DRUM_OR_DISC_SCRAPER}
      {...props}
      _style={extendStyle(LIQUID_FILTER_ROTARY_DRUM_OR_DISC_SCRAPER, props)}
    />
  )
}
