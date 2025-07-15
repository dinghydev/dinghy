import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AMAZON_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.amazon_2;gradientColor=#231F20',
  _width: 102.4,
  _height: 102.4,
}

export function Amazon2(props: DiagramNodeProps) {
  return <Shape {...AMAZON_2} {...props} />
}
