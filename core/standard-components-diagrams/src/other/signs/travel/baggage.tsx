import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAGGAGE = {
  _style:
    'shape=mxgraph.signs.travel.baggage;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 82,
}

export function Baggage(props: DiagramNodeProps) {
  return <Shape {...BAGGAGE} {...props} _style={extendStyle(BAGGAGE, props)} />
}
