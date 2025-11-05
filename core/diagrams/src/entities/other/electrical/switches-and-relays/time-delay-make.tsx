import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_DELAY_MAKE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.timeDelaySwitch;elSwitchState=off;',
  },
  _width: 75,
  _height: 32,
}

export function TimeDelayMake(props: NodeProps) {
  return (
    <Shape
      {...TIME_DELAY_MAKE}
      {...props}
      _style={extendStyle(TIME_DELAY_MAKE, props)}
    />
  )
}
