import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEAD_LETTER_CHANNEL = {
  _style:
    'strokeWidth=1;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.deadLetterChannel;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  _width: 100,
  _height: 20,
}

export function DeadLetterChannel(props: DiagramNodeProps) {
  return <Shape {...DEAD_LETTER_CHANNEL} {...props} />
}
