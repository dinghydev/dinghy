import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROGRAMMABLE_LOGIC_CONTROL_CONTROL_ROOM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.progLogCont;mounting=room',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ProgrammableLogicControlControlRoom(props: NodeProps) {
  return (
    <Shape
      {...PROGRAMMABLE_LOGIC_CONTROL_CONTROL_ROOM}
      {...props}
      _style={extendStyle(PROGRAMMABLE_LOGIC_CONTROL_CONTROL_ROOM, props)}
    />
  )
}
