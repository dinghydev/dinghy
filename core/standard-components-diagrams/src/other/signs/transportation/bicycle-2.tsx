import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BICYCLE_2 = {
  _style:
    'shape=mxgraph.signs.transportation.bicycle_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 56,
}

export function Bicycle2(props: DiagramNodeProps) {
  return (
    <Shape {...BICYCLE_2} {...props} _style={extendStyle(BICYCLE_2, props)} />
  )
}
