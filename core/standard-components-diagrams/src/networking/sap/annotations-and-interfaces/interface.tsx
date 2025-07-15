import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERFACE = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#0070f3;fillColor=default;strokeWidth=1.5;',
  _width: 57,
  _height: 16,
}

export function Interface(props: DiagramNodeProps) {
  return <Shape {...INTERFACE} {...props} />
}
