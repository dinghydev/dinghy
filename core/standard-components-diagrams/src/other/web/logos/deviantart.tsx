import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVIANTART = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.deviantart;fillColor=#009544;strokeColor=none;',
  _width: 62,
  _height: 86.4,
}

export function Deviantart(props: DiagramNodeProps) {
  return <Shape {...DEVIANTART} {...props} />
}
