import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ESCALATOR_UP = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.escalator_up;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 90,
}

export function EscalatorUp(props: DiagramNodeProps) {
  return (
    <Shape
      {...ESCALATOR_UP}
      {...props}
      _style={extendStyle(ESCALATOR_UP, props)}
    />
  )
}
