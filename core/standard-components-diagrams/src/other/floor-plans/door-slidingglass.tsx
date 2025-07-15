import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_SLIDINGGLASS = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorSlidingGlass;dx=0.25;',
  _width: 104,
  _height: 10,
}

export function DoorSlidingglass(props: DiagramNodeProps) {
  return <Shape {...DOOR_SLIDINGGLASS} {...props} />
}
