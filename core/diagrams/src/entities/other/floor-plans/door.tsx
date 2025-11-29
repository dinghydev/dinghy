import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorLeft;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 85,
}

export function Door(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOOR)} />
}
