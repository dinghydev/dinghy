import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OR_GATE = {
  _style: {
    entity:
      'shape=xor;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;direction=north;',
  },
  _width: 120,
  _height: 80,
}

export function OrGate(props: DiagramNodeProps) {
  return <Shape {...OR_GATE} {...props} _style={extendStyle(OR_GATE, props)} />
}
