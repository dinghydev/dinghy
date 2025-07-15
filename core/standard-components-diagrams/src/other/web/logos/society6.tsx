import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOCIETY6 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.society6;fillColor=#000000;strokeColor=none',
  _width: 74.8,
  _height: 53,
}

export function Society6(props: DiagramNodeProps) {
  return <Shape {...SOCIETY6} {...props} />
}
