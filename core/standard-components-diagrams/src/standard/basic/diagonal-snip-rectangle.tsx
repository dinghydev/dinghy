import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIAGONAL_SNIP_RECTANGLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.diag_snip_rect;dx=6;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function DiagonalSnipRectangle(props: DiagramNodeProps) {
  return <Shape {...DIAGONAL_SNIP_RECTANGLE} {...props} />
}
