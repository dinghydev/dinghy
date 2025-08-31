import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_ENDPOINT = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;verticalLabelPosition=bottom;verticalAlign=top;fillColor=#c0f5a9;html=1;',
  _width: 0,
  _height: 90,
}

export function MessageEndpoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_ENDPOINT}
      {...props}
      _style={extendStyle(MESSAGE_ENDPOINT, props)}
    />
  )
}
