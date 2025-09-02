import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.uTurnArrow;dy=22;arrowHead=70;dx2=35;strokeColor=#ffffff;fillColor=#10739E;fontSize=12;fontColor=#3333FF;flipH=1;flipV=1;strokeWidth=4;',
  },
  _original_width: 4,
  _original_height: 456,
}

export function Swirl5(props: DiagramNodeProps) {
  return <Shape {...SWIRL_5} {...props} _style={extendStyle(SWIRL_5, props)} />
}
