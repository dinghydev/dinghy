import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FRAME = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.frame;dx=10;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function Frame(props: DiagramNodeProps) {
  return <Shape {...FRAME} {...props} />
}
