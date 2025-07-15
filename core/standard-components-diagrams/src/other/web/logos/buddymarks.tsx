import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUDDYMARKS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.buddymarks',
  _width: 79.4,
  _height: 57,
}

export function Buddymarks(props: DiagramNodeProps) {
  return <Shape {...BUDDYMARKS} {...props} />
}
