import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DONUT = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=25;',
  _width: 100,
  _height: 100,
}

export function Donut(props: DiagramNodeProps) {
  return <Shape {...DONUT} {...props} />
}
