import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEAD_LETTER_CHANNEL = {
  _style: {
    entity:
      'strokeWidth=1;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.deadLetterChannel;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _original_width: 100,
  _original_height: 20,
}

export function DeadLetterChannel(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEAD_LETTER_CHANNEL}
      {...props}
      _style={extendStyle(DEAD_LETTER_CHANNEL, props)}
    />
  )
}
