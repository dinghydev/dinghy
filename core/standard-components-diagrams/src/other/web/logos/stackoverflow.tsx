import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACKOVERFLOW = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.stackoverflow',
  _width: 54.400000000000006,
  _height: 64,
}

export function Stackoverflow(props: DiagramNodeProps) {
  return <Shape {...STACKOVERFLOW} {...props} />
}
