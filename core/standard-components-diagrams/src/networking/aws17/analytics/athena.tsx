import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ATHENA = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.athena;fillColor=#F58534;gradientColor=none;',
  _width: 76.5,
  _height: 76.5,
}

export function Athena(props: DiagramNodeProps) {
  return <Shape {...ATHENA} {...props} />
}
