import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWIRL_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.uTurnArrow;dy=22;arrowHead=70;dx2=35;strokeColor=#ffffff;fillColor=#23445D;fontSize=12;fontColor=#3333FF;flipV=1;strokeWidth=4;',
  },
  _width: 1,
  _height: 456,
}

export function Swirl2(props: DiagramNodeProps) {
  return <Shape {...SWIRL_2} {...props} _style={extendStyle(SWIRL_2, props)} />
}
