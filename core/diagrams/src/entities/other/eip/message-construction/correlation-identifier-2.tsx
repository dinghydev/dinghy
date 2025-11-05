import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CORRELATION_IDENTIFIER_2 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#FF9238;strokeColor=#000000;fontStyle=1;fontColor=#ffffff;whiteSpace=wrap;html=1;',
  },
  _width: 4,
  _height: 30,
}

export function CorrelationIdentifier2(props: NodeProps) {
  return (
    <Shape
      {...CORRELATION_IDENTIFIER_2}
      {...props}
      _style={extendStyle(CORRELATION_IDENTIFIER_2, props)}
    />
  )
}
