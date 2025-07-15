import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHILLER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.chiller;',
  _width: 155,
  _height: 115,
}

export function Chiller(props: DiagramNodeProps) {
  return <Shape {...CHILLER} {...props} />
}
