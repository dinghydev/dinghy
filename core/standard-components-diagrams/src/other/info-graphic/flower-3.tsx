import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOWER_3 = {
  _style: {
    entity:
      'shape=mxgraph.basic.diag_round_rect;dx=37;flipH=1;flipV=1;html=1;fillColor=#AE4132;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;strokeWidth=8;',
  },
  _original_width: 2,
  _original_height: 310,
}

export function Flower3(props: DiagramNodeProps) {
  return (
    <Shape {...FLOWER_3} {...props} _style={extendStyle(FLOWER_3, props)} />
  )
}
