import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MENEAME = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.meneame',
  _width: 76,
  _height: 67.60000000000001,
}

export function Meneame(props: DiagramNodeProps) {
  return <Shape {...MENEAME} {...props} />
}
