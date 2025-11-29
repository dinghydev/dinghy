import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROOM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.room;fillColor=strokeColor;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Room(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROOM)} />
}
