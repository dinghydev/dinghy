import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTER_FUNCTION_LOCAL_PANEL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.compFunc;mounting=local',
  },
  _width: 60,
  _height: 60,
}

export function ComputerFunctionLocalPanel(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTER_FUNCTION_LOCAL_PANEL}
      {...props}
      _style={extendStyle(COMPUTER_FUNCTION_LOCAL_PANEL, props)}
    />
  )
}
