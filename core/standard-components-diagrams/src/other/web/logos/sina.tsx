import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sina',
  _width: 85.80000000000001,
  _height: 68.60000000000001,
}

export function Sina(props: DiagramNodeProps) {
  return <Shape {...SINA} {...props} />
}
