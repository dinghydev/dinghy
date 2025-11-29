import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BATTERY_STACK = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.batteryStack;',
  },
  _width: 100,
  _height: 60,
}

export function BatteryStack(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BATTERY_STACK)} />
}
