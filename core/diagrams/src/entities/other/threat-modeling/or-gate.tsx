import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OR_GATE = {
  _style: {
    entity:
      'shape=xor;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;direction=north;',
  },
  _width: 120,
  _height: 80,
}

export function OrGate(props: NodeProps) {
  return <Shape {...OR_GATE} {...props} _style={extendStyle(OR_GATE, props)} />
}
