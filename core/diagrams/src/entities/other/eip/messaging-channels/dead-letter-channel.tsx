import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEAD_LETTER_CHANNEL = {
  _style: {
    entity:
      'strokeWidth=1;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.deadLetterChannel;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _width: 100,
  _height: 20,
}

export function DeadLetterChannel(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEAD_LETTER_CHANNEL)} />
}
