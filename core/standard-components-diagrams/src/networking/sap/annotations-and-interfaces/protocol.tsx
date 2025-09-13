import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROTOCOL = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#0070F2;fillColor=#EBF8FF;fontColor=#266f3a;strokeWidth=1.5;',
  },
  _width: 125,
  _height: 16,
}

export function Protocol(props: DiagramNodeProps) {
  return (
    <Shape {...PROTOCOL} {...props} _style={extendStyle(PROTOCOL, props)} />
  )
}
