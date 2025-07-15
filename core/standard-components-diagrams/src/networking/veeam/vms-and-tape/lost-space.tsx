import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOST_SPACE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.lost_space;',
  _width: 43.2,
  _height: 44.4,
}

export function LostSpace(props: DiagramNodeProps) {
  return <Shape {...LOST_SPACE} {...props} />
}
