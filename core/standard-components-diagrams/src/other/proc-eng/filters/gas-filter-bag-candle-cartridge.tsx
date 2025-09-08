import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAS_FILTER_BAG_CANDLE_CARTRIDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.gas_filter_(bag,_candle,_cartridge);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function GasFilterBagCandleCartridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...GAS_FILTER_BAG_CANDLE_CARTRIDGE}
      {...props}
      _style={extendStyle(GAS_FILTER_BAG_CANDLE_CARTRIDGE, props)}
    />
  )
}
