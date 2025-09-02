import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOWER_4 = {
  _style: {
    entity:
      'shape=mxgraph.basic.diag_round_rect;dx=37;flipV=1;html=1;fillColor=#23445D;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;strokeWidth=8;',
  },
  _original_width: 3,
  _original_height: 310,
}

export function Flower4(props: DiagramNodeProps) {
  return (
    <Shape {...FLOWER_4} {...props} _style={extendStyle(FLOWER_4, props)} />
  )
}
