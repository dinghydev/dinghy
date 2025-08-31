import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STAIRS = {
  _style:
    'shape=mxgraph.signs.travel.stairs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 83,
}

export function Stairs(props: DiagramNodeProps) {
  return <Shape {...STAIRS} {...props} _style={extendStyle(STAIRS, props)} />
}
