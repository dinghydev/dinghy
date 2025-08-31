import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INVALID_MESSAGE_CHANNEL = {
  _style:
    'strokeWidth=1;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.invalidMessageChannel;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  _width: 100,
  _height: 20,
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
