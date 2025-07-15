import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MATRIX_2X2_9 = {
  _style:
    'shape=mxgraph.basic.three_corner_round_rect;dx=18;flipH=1;flipV=1;html=1;fillColor=#AE4132;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  _width: 2,
  _height: 240,
}

export function Matrix2x29(props: DiagramNodeProps) {
  return <Shape {...MATRIX_2X2_9} {...props} />
}
