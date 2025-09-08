import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPUTER_FUNCTION_FIELD = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=field',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ComputerFunctionField(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTER_FUNCTION_FIELD}
      {...props}
      _style={extendStyle(COMPUTER_FUNCTION_FIELD, props)}
    />
  )
}
