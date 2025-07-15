import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_DELAY_BREAK = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.timeDelaySwitch;elSwitchState=on;',
  _width: 75,
  _height: 32,
}

export function TimeDelayBreak(props: DiagramNodeProps) {
  return <Shape {...TIME_DELAY_BREAK} {...props} />
}
