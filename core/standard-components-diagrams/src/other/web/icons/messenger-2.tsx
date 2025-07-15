import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSENGER_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.messenger_2;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Messenger2(props: DiagramNodeProps) {
  return <Shape {...MESSENGER_2} {...props} />
}
