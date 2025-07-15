import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHAIR = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;',
  _width: 41,
  _height: 52,
}

export function Chair(props: DiagramNodeProps) {
  return <Shape {...CHAIR} {...props} />
}
