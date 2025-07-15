import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OR_GATE = {
  _style:
    'shape=xor;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;direction=north;',
  _width: 120,
  _height: 80,
}

export function OrGate(props: DiagramNodeProps) {
  return <Shape {...OR_GATE} {...props} />
}
