import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_BI_FOLD = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorBifold;dx=0.3;',
  _width: 160,
  _height: 40,
}

export function DoorBiFold(props: DiagramNodeProps) {
  return <Shape {...DOOR_BI_FOLD} {...props} />
}
