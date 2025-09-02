import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_CONTROL_ROOM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=room',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LogicControlRoom(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_CONTROL_ROOM}
      {...props}
      _style={extendStyle(LOGIC_CONTROL_ROOM, props)}
    />
  )
}
