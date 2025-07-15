import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLAXO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.plaxo;fillColor=#414F5C;strokeColor=none',
  _width: 80,
  _height: 80,
}

export function Plaxo(props: DiagramNodeProps) {
  return <Shape {...PLAXO} {...props} />
}
