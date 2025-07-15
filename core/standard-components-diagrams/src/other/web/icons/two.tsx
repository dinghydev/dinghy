import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TWO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.two;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Two(props: DiagramNodeProps) {
  return <Shape {...TWO} {...props} />
}
