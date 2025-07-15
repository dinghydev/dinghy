import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FRAME_CORNER = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.frame_corner;dx=10;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function FrameCorner(props: DiagramNodeProps) {
  return <Shape {...FRAME_CORNER} {...props} />
}
