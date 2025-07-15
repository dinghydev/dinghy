import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STAR = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.star',
  _width: 100,
  _height: 95,
}

export function Star(props: DiagramNodeProps) {
  return <Shape {...STAR} {...props} />
}
