import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTER_FUNCTION_CONTROL_ROOM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=room',
  },
  _width: 60,
  _height: 60,
}

export function ComputerFunctionControlRoom(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTER_FUNCTION_CONTROL_ROOM}
      {...props}
      _style={extendStyle(COMPUTER_FUNCTION_CONTROL_ROOM, props)}
    />
  )
}
