import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOCIETY6 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.society6;fillColor=#695D5D;gradientColor=#100E0E',
  _width: 102.4,
  _height: 102.4,
}

export function Society6(props: DiagramNodeProps) {
  return <Shape {...SOCIETY6} {...props} />
}
