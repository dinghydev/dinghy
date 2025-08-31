import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ESCALATOR_DOWN = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.escalator_down;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 89,
}

export function EscalatorDown(props: DiagramNodeProps) {
  return (
    <Shape
      {...ESCALATOR_DOWN}
      {...props}
      _style={extendStyle(ESCALATOR_DOWN, props)}
    />
  )
}
