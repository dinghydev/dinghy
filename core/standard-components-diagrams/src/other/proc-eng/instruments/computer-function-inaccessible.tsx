import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTER_FUNCTION_INACCESSIBLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=inaccessible',
  },
  _width: 60,
  _height: 60,
}

export function ComputerFunctionInaccessible(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTER_FUNCTION_INACCESSIBLE}
      {...props}
      _style={extendStyle(COMPUTER_FUNCTION_INACCESSIBLE, props)}
    />
  )
}
