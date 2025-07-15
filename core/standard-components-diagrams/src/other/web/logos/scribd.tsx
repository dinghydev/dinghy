import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCRIBD = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.scribd;fillColor=#3D3533;strokeColor=none',
  _width: 57.800000000000004,
  _height: 69.2,
}

export function Scribd(props: DiagramNodeProps) {
  return <Shape {...SCRIBD} {...props} />
}
