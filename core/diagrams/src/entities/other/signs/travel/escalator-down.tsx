import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ESCALATOR_DOWN = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.escalator_down;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 89,
}

export function EscalatorDown(props: NodeProps) {
  return (
    <Shape
      {...ESCALATOR_DOWN}
      {...props}
      _style={extendStyle(ESCALATOR_DOWN, props)}
    />
  )
}
