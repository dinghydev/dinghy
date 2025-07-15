import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OCTAGON = {
  _style:
    'whiteSpace=wrap;html=1;shape=mxgraph.basic.octagon2;align=center;verticalAlign=middle;dx=15;',
  _width: 100,
  _height: 100,
}

export function Octagon(props: DiagramNodeProps) {
  return <Shape {...OCTAGON} {...props} />
}
