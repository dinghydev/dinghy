import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POCKET = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.pocket;fillColor=#EE4056;strokeColor=none',
  _width: 62.800000000000004,
  _height: 57.800000000000004,
}

export function Pocket(props: DiagramNodeProps) {
  return <Shape {...POCKET} {...props} />
}
