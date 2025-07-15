import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROTOCOL = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#0070F2;fillColor=#EBF8FF;fontColor=#266f3a;strokeWidth=1.5;',
  _width: 125,
  _height: 16,
}

export function Protocol(props: DiagramNodeProps) {
  return <Shape {...PROTOCOL} {...props} />
}
