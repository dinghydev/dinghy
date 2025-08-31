import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_ENDPOINT_3 = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#c0f5a9;strokeColor=#000000;html=1;',
  _width: 1,
  _height: 90,
}

export function MessageEndpoint3(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_ENDPOINT_3}
      {...props}
      _style={extendStyle(MESSAGE_ENDPOINT_3, props)}
    />
  )
}
