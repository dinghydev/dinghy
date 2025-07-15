import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLAXO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.plaxo;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Plaxo(props: DiagramNodeProps) {
  return <Shape {...PLAXO} {...props} />
}
