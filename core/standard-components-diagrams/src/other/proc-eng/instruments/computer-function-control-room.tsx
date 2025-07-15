import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPUTER_FUNCTION_CONTROL_ROOM = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=room',
  _width: 50,
  _height: 50,
}

export function ComputerFunctionControlRoom(props: DiagramNodeProps) {
  return <Shape {...COMPUTER_FUNCTION_CONTROL_ROOM} {...props} />
}
