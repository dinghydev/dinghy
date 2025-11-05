import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPUTER_FUNCTION_CONTROL_ROOM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=room',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ComputerFunctionControlRoom(props: NodeProps) {
  return (
    <Shape
      {...COMPUTER_FUNCTION_CONTROL_ROOM}
      {...props}
      _style={extendStyle(COMPUTER_FUNCTION_CONTROL_ROOM, props)}
    />
  )
}
