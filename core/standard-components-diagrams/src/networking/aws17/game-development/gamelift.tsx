import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAMELIFT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.gamelift;fillColor=#AD688B;gradientColor=none;',
  _width: 70.5,
  _height: 85.5,
}

export function Gamelift(props: DiagramNodeProps) {
  return <Shape {...GAMELIFT} {...props} />
}
