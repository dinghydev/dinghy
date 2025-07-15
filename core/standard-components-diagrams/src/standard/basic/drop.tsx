import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DROP = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.drop',
  _width: 70,
  _height: 100,
}

export function Drop(props: DiagramNodeProps) {
  return <Shape {...DROP} {...props} />
}
