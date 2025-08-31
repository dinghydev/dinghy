import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPOSED_MESSAGE_PROCESSOR = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.composed_message_processor;',
  _width: 150,
  _height: 90,
}

export function ComposedMessageProcessor(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPOSED_MESSAGE_PROCESSOR}
      {...props}
      _style={extendStyle(COMPOSED_MESSAGE_PROCESSOR, props)}
    />
  )
}
