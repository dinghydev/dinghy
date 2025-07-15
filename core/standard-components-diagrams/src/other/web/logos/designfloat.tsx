import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DESIGNFLOAT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.designfloat;strokeColor=none',
  _width: 72,
  _height: 72,
}

export function Designfloat(props: DiagramNodeProps) {
  return <Shape {...DESIGNFLOAT} {...props} />
}
