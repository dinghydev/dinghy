import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLAQUE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.plaque;dx=6;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function Plaque(props: DiagramNodeProps) {
  return <Shape {...PLAQUE} {...props} />
}
