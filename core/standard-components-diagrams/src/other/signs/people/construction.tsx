import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRUCTION = {
  _style:
    'shape=mxgraph.signs.people.construction;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 88,
  _height: 99,
}

export function Construction(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRUCTION}
      {...props}
      _style={extendStyle(CONSTRUCTION, props)}
    />
  )
}
