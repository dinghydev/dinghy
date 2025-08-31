import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_PUMP = {
  _style:
    'shape=mxgraph.pid.pumps.horizontal_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 155,
  _height: 111,
}

export function HorizontalPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_PUMP}
      {...props}
      _style={extendStyle(HORIZONTAL_PUMP, props)}
    />
  )
}
