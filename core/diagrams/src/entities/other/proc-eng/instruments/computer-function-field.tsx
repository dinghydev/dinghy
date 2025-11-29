import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPUTER_FUNCTION_FIELD = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=field',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ComputerFunctionField(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPUTER_FUNCTION_FIELD)} />
  )
}
