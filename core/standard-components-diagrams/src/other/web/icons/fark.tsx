import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FARK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.fark;fillColor=#EBEBF1;gradientColor=#8482A7',
  _width: 102.4,
  _height: 102.4,
}

export function Fark(props: DiagramNodeProps) {
  return <Shape {...FARK} {...props} />
}
