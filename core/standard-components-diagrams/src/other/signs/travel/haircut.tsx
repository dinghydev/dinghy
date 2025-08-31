import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HAIRCUT = {
  _style:
    'shape=mxgraph.signs.travel.haircut;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 58,
  _height: 100,
}

export function Haircut(props: DiagramNodeProps) {
  return <Shape {...HAIRCUT} {...props} _style={extendStyle(HAIRCUT, props)} />
}
