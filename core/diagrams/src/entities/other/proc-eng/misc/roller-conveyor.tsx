import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLLER_CONVEYOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.roller_conveyor;',
  },
  _width: 160,
  _height: 20,
}

export function RollerConveyor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROLLER_CONVEYOR)} />
}
