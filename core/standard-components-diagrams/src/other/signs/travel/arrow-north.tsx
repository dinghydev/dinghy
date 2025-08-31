import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_NORTH = {
  _style:
    'shape=mxgraph.signs.travel.arrow_north;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 83,
  _height: 98,
}

export function ArrowNorth(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_NORTH}
      {...props}
      _style={extendStyle(ARROW_NORTH, props)}
    />
  )
}
