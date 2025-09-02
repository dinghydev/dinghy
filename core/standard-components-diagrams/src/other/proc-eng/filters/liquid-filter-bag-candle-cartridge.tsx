import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIQUID_FILTER_BAG_CANDLE_CARTRIDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_Filter_(bag,_candle,_cartridge);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function LiquidFilterBagCandleCartridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_BAG_CANDLE_CARTRIDGE}
      {...props}
      _style={extendStyle(LIQUID_FILTER_BAG_CANDLE_CARTRIDGE, props)}
    />
  )
}
