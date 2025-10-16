import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERIC_PROTOCOL = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#475f75;fillColor=#f5f6f7;fontColor=#266f3a;strokeWidth=1.5;',
  },
  _width: 125,
  _height: 16,
}

export function GenericProtocol(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_PROTOCOL}
      {...props}
      _style={extendStyle(GENERIC_PROTOCOL, props)}
    />
  )
}
