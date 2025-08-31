import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_DELAY_MAKE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.timeDelaySwitch;elSwitchState=off;',
  },
  _width: 75,
  _height: 32,
}

export function TimeDelayMake(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_DELAY_MAKE}
      {...props}
      _style={extendStyle(TIME_DELAY_MAKE, props)}
    />
  )
}
