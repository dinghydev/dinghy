import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCUMULATOR_MONOCELL_BATTERY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.monocell_battery;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function AccumulatorMonocellBattery(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCUMULATOR_MONOCELL_BATTERY}
      {...props}
      _style={extendStyle(ACCUMULATOR_MONOCELL_BATTERY, props)}
    />
  )
}
