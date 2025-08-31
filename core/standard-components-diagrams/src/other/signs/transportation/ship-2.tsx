import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHIP_2 = {
  _style:
    'shape=mxgraph.signs.transportation.ship_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 98,
}

export function Ship2(props: DiagramNodeProps) {
  return <Shape {...SHIP_2} {...props} _style={extendStyle(SHIP_2, props)} />
}
