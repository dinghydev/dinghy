import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCUIT_TERMINAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=ellipse;perimeter=ellipsePerimeter;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function CircuitTerminal(props: NodeProps) {
  return (
    <Shape
      {...CIRCUIT_TERMINAL}
      {...props}
      _style={extendStyle(CIRCUIT_TERMINAL, props)}
    />
  )
}
