import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSENGER_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.messenger_2',
  _width: 64.4,
  _height: 64.8,
}

export function Messenger2(props: DiagramNodeProps) {
  return <Shape {...MESSENGER_2} {...props} />
}
