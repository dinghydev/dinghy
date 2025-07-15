import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUNDED_FRAME = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.rounded_frame;dx=10;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function RoundedFrame(props: DiagramNodeProps) {
  return <Shape {...ROUNDED_FRAME} {...props} />
}
