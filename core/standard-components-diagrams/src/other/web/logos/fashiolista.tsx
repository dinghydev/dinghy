import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FASHIOLISTA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fashiolista',
  _width: 77.60000000000001,
  _height: 73.2,
}

export function Fashiolista(props: DiagramNodeProps) {
  return <Shape {...FASHIOLISTA} {...props} />
}
