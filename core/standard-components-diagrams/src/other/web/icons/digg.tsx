import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIGG = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.digg;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Digg(props: DiagramNodeProps) {
  return <Shape {...DIGG} {...props} />
}
