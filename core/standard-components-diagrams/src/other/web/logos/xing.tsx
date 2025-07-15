import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XING = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.xing',
  _width: 65,
  _height: 73.8,
}

export function Xing(props: DiagramNodeProps) {
  return <Shape {...XING} {...props} />
}
