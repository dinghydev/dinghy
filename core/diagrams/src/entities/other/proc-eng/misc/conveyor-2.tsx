import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONVEYOR_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor2;',
  },
  _width: 200,
  _height: 60,
}

export function Conveyor2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONVEYOR_2)} />
}
