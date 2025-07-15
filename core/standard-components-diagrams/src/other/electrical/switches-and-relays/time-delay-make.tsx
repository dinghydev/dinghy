import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_DELAY_MAKE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.timeDelaySwitch;elSwitchState=off;',
  _width: 75,
  _height: 32,
}

export function TimeDelayMake(props: DiagramNodeProps) {
  return <Shape {...TIME_DELAY_MAKE} {...props} />
}
