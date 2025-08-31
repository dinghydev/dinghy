import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_TRANSLATOR = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.message_translator;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;',
  _width: 150,
  _height: 90,
}

export function MessageTranslator(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_TRANSLATOR}
      {...props}
      _style={extendStyle(MESSAGE_TRANSLATOR, props)}
    />
  )
}
