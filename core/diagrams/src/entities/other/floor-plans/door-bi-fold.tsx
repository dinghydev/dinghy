import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_BI_FOLD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorBifold;dx=0.3;',
  },
  _width: 160,
  _height: 40,
}

export function DoorBiFold(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOOR_BI_FOLD)} />
}
