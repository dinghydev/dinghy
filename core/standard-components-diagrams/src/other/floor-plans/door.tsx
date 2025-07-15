import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorLeft;aspect=fixed;',
  _width: 80,
  _height: 85,
}

export function Door(props: DiagramNodeProps) {
  return <Shape {...DOOR} {...props} />
}
