import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEALSPLUS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dealsplus;fillColor=#935492',
  _width: 76,
  _height: 66.60000000000001,
}

export function Dealsplus(props: DiagramNodeProps) {
  return <Shape {...DEALSPLUS} {...props} />
}
