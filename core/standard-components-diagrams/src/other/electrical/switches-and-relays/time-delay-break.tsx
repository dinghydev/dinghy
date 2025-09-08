import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TIME_DELAY_BREAK = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.timeDelaySwitch;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 32,
}

export function TimeDelayBreak(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_DELAY_BREAK}
      {...props}
      _style={extendStyle(TIME_DELAY_BREAK, props)}
    />
  )
}
