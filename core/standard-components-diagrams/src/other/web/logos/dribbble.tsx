import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DRIBBBLE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dribbble;fillColor=#EB548D',
  _width: 67.4,
  _height: 67.2,
}

export function Dribbble(props: DiagramNodeProps) {
  return <Shape {...DRIBBBLE} {...props} />
}
