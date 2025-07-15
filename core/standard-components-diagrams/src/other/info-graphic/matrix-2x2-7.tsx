import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MATRIX_2X2_7 = {
  _style:
    'shape=mxgraph.basic.three_corner_round_rect;dx=18;flipH=1;html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  _width: 0,
  _height: 240,
}

export function Matrix2x27(props: DiagramNodeProps) {
  return <Shape {...MATRIX_2X2_7} {...props} />
}
