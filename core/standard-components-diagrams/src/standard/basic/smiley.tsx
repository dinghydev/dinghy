import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMILEY = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.smiley',
  _width: 100,
  _height: 100,
}

export function Smiley(props: DiagramNodeProps) {
  return <Shape {...SMILEY} {...props} />
}
