import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOWER = {
  _style: {
    entity:
      'shape=mxgraph.basic.diag_round_rect;dx=37;flipH=1;html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;strokeWidth=8;',
  },
  _original_width: 0,
  _original_height: 310,
}

export function Flower(props: DiagramNodeProps) {
  return <Shape {...FLOWER} {...props} _style={extendStyle(FLOWER, props)} />
}
