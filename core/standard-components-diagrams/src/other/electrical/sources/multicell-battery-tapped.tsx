import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTICELL_BATTERY_TAPPED = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.multicell_battery_tapped;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function MulticellBatteryTapped(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTICELL_BATTERY_TAPPED}
      {...props}
      _style={extendStyle(MULTICELL_BATTERY_TAPPED, props)}
    />
  )
}
