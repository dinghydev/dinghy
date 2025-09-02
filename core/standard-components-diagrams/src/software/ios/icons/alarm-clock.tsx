import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALARM_CLOCK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.alarm_clock;',
  },
  _original_width: 27,
  _original_height: 30,
}

export function AlarmClock(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALARM_CLOCK}
      {...props}
      _style={extendStyle(ALARM_CLOCK, props)}
    />
  )
}
