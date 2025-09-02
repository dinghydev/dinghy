import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY_STACK = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.batteryStack;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function BatteryStack(props: DiagramNodeProps) {
  return (
    <Shape
      {...BATTERY_STACK}
      {...props}
      _style={extendStyle(BATTERY_STACK, props)}
    />
  )
}
