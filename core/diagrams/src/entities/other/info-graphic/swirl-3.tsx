import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIRL_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.uTurnArrow;dy=22;arrowHead=70;dx2=35;strokeColor=#ffffff;fillColor=#AE4132;fontSize=12;fontColor=#3333FF;flipH=1;flipV=1;strokeWidth=4;',
  },
  _width: 2,
  _height: 456,
}

export function Swirl3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWIRL_3)} />
}
