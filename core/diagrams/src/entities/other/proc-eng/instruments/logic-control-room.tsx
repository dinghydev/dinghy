import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGIC_CONTROL_ROOM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=room',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LogicControlRoom(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOGIC_CONTROL_ROOM)} />
}
