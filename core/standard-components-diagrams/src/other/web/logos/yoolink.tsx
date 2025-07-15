import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YOOLINK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yoolink',
  _width: 79.2,
  _height: 79.2,
}

export function Yoolink(props: DiagramNodeProps) {
  return <Shape {...YOOLINK} {...props} />
}
