import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INVALID_MESSAGE_CHANNEL = {
  _style: {
    entity:
      'strokeWidth=1;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.invalidMessageChannel;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _original_width: 100,
  _original_height: 20,
}

export function InvalidMessageChannel(props: DiagramNodeProps) {
  return (
    <Shape
      {...INVALID_MESSAGE_CHANNEL}
      {...props}
      _style={extendStyle(INVALID_MESSAGE_CHANNEL, props)}
    />
  )
}
