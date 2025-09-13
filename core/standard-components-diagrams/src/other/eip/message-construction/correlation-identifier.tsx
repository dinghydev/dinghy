import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CORRELATION_IDENTIFIER = {
  _style: {
    entity:
      'endArrow=block;html=1;endFill=1;strokeWidth=2;strokeColor=#FF9238;rounded=0;',
  },
  _width: 2,
  _height: 30,
}

export function CorrelationIdentifier(props: DiagramNodeProps) {
  return (
    <Shape
      {...CORRELATION_IDENTIFIER}
      {...props}
      _style={extendStyle(CORRELATION_IDENTIFIER, props)}
    />
  )
}
