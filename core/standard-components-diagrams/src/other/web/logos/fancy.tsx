import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FANCY = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fancy;fillColor=#6DB3E3',
  _width: 39.2,
  _height: 79,
}

export function Fancy(props: DiagramNodeProps) {
  return <Shape {...FANCY} {...props} />
}
