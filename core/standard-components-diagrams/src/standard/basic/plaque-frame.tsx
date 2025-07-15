import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLAQUE_FRAME = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.plaque_frame;dx=10;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function PlaqueFrame(props: DiagramNodeProps) {
  return <Shape {...PLAQUE_FRAME} {...props} />
}
