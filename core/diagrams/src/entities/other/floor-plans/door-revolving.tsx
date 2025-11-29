import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_REVOLVING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorRevolving;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 85,
}

export function DoorRevolving(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOOR_REVOLVING)} />
}
