import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YAMMER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yammer;fillColor=#0093BE;strokeColor=none',
  _width: 69.60000000000001,
  _height: 59.6,
}

export function Yammer(props: DiagramNodeProps) {
  return <Shape {...YAMMER} {...props} />
}
