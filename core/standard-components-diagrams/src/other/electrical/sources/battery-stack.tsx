import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY_STACK = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.batteryStack;',
  },
  _width: 100,
  _height: 60,
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
