import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAYERED_RECTANGLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.layered_rect;dx=10;outlineConnect=0;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function LayeredRectangle(props: DiagramNodeProps) {
  return <Shape {...LAYERED_RECTANGLE} {...props} />
}
