import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOWER_2 = {
  _style: {
    entity:
      'shape=mxgraph.basic.diag_round_rect;dx=37;html=1;fillColor=#F2931E;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;strokeWidth=8;',
  },
  _width: 1,
  _height: 310,
}

export function Flower2(props: DiagramNodeProps) {
  return (
    <Shape {...FLOWER_2} {...props} _style={extendStyle(FLOWER_2, props)} />
  )
}
