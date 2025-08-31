import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUBMERSIBLE_PUMP = {
  _style:
    'shape=mxgraph.pid.pumps.submersible_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 103,
  _height: 74,
}

export function SubmersiblePump(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUBMERSIBLE_PUMP}
      {...props}
      _style={extendStyle(SUBMERSIBLE_PUMP, props)}
    />
  )
}
