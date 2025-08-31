import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_4 = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.uTurnArrow;dy=22;arrowHead=70;dx2=35;strokeColor=#ffffff;fillColor=#F2931E;fontSize=12;fontColor=#3333FF;flipV=1;strokeWidth=4;',
  _width: 3,
  _height: 456,
}

export function Swirl4(props: DiagramNodeProps) {
  return <Shape {...SWIRL_4} {...props} _style={extendStyle(SWIRL_4, props)} />
}
