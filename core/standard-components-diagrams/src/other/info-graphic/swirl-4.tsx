import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWIRL_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.uTurnArrow;dy=22;arrowHead=70;dx2=35;strokeColor=#ffffff;fillColor=#F2931E;fontSize=12;fontColor=#3333FF;flipV=1;strokeWidth=4;',
  },
  _original_width: 3,
  _original_height: 456,
}

export function Swirl4(props: DiagramNodeProps) {
  return <Shape {...SWIRL_4} {...props} _style={extendStyle(SWIRL_4, props)} />
}
