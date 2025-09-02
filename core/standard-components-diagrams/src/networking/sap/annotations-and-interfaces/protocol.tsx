import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROTOCOL = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#0070F2;fillColor=#EBF8FF;fontColor=#266f3a;strokeWidth=1.5;',
  },
  _original_width: 125,
  _original_height: 16,
}

export function Protocol(props: DiagramNodeProps) {
  return (
    <Shape {...PROTOCOL} {...props} _style={extendStyle(PROTOCOL, props)} />
  )
}
