import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESISTOR_INSTRUMENT_RELAY_SHUNT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.resistor_with_instrument_or_relay_shunt;',
  },
  _width: 100,
  _height: 20,
}

export function ResistorInstrumentRelayShunt(props: NodeProps) {
  return (
    <Shape
      {...RESISTOR_INSTRUMENT_RELAY_SHUNT}
      {...props}
      _style={extendStyle(RESISTOR_INSTRUMENT_RELAY_SHUNT, props)}
    />
  )
}
