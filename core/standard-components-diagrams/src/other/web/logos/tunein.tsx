import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TUNEIN = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.tunein',
  _width: 70,
  _height: 70,
}

export function Tunein(props: DiagramNodeProps) {
  return <Shape {...TUNEIN} {...props} />
}
