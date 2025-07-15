import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CORNER_ROUNDED_RECTANGLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.corner_round_rect;dx=6;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function CornerRoundedRectangle(props: DiagramNodeProps) {
  return <Shape {...CORNER_ROUNDED_RECTANGLE} {...props} />
}
