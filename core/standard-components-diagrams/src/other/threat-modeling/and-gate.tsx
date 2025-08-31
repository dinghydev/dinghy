import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AND_GATE = {
  _style: {
    entity:
      'shape=or;whiteSpace=wrap;html=1;direction=north;fillColor=#dae8fc;strokeColor=#6c8ebf;',
  },
  _width: 120,
  _height: 80,
}

export function AndGate(props: DiagramNodeProps) {
  return (
    <Shape {...AND_GATE} {...props} _style={extendStyle(AND_GATE, props)} />
  )
}
