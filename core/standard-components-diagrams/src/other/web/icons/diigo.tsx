import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIIGO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.diigo;fillColor=#2C7DE0;gradientColor=#1E5599',
  _width: 102.4,
  _height: 102.4,
}

export function Diigo(props: DiagramNodeProps) {
  return <Shape {...DIIGO} {...props} />
}
