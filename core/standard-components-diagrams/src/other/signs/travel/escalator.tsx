import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ESCALATOR = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.escalator;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 77,
}

export function Escalator(props: DiagramNodeProps) {
  return (
    <Shape {...ESCALATOR} {...props} _style={extendStyle(ESCALATOR, props)} />
  )
}
