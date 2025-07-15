import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEART = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.heart',
  _width: 100,
  _height: 100,
}

export function Heart(props: DiagramNodeProps) {
  return <Shape {...HEART} {...props} />
}
