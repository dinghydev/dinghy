import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.vertical_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 120,
  _height: 146,
}

export function VerticalPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_PUMP}
      {...props}
      _style={extendStyle(VERTICAL_PUMP, props)}
    />
  )
}
