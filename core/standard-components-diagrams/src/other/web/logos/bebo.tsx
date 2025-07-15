import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BEBO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.bebo;fillColor=#EC1C23;strokeColor=none',
  _width: 55.800000000000004,
  _height: 71.4,
}

export function Bebo(props: DiagramNodeProps) {
  return <Shape {...BEBO} {...props} />
}
