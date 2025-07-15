import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DRAW_IO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.drawio2;fillColor=#2174CE;gradientColor=#134277',
  _width: 102.4,
  _height: 102.4,
}

export function DrawIo(props: DiagramNodeProps) {
  return <Shape {...DRAW_IO} {...props} />
}
