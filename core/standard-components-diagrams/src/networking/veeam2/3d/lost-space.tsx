import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOST_SPACE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.lost_space;',
  _width: 44,
  _height: 60,
}

export function LostSpace(props: DiagramNodeProps) {
  return <Shape {...LOST_SPACE} {...props} />
}
