import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCUMULATOR_MONOCELL_BATTERY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.monocell_battery;',
  },
  _width: 100,
  _height: 60,
}

export function AccumulatorMonocellBattery(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ACCUMULATOR_MONOCELL_BATTERY)}
    />
  )
}
