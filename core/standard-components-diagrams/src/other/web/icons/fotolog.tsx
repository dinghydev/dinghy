import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOTOLOG = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.fotolog;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Fotolog(props: DiagramNodeProps) {
  return <Shape {...FOTOLOG} {...props} />
}
