import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOLKD = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.folkd;fillColor=#165AA6',
  _width: 83.80000000000001,
  _height: 43.6,
}

export function Folkd(props: DiagramNodeProps) {
  return <Shape {...FOLKD} {...props} />
}
