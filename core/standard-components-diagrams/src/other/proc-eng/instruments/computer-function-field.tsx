import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPUTER_FUNCTION_FIELD = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=field',
  _width: 50,
  _height: 50,
}

export function ComputerFunctionField(props: DiagramNodeProps) {
  return <Shape {...COMPUTER_FUNCTION_FIELD} {...props} />
}
