import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_BY_PASS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorBypass;dx=0.25;',
  },
  _width: 104,
  _height: 10,
}

export function DoorByPass(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOOR_BY_PASS)} />
}
