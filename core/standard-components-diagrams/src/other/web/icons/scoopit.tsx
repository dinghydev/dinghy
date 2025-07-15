import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCOOPIT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.scoopit;fillColor=#8CD845;gradientColor=#4E7A27',
  _width: 102.4,
  _height: 102.4,
}

export function Scoopit(props: DiagramNodeProps) {
  return <Shape {...SCOOPIT} {...props} />
}
