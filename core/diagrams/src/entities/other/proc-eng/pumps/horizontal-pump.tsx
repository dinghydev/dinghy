import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.horizontal_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 155,
  _height: 111,
}

export function HorizontalPump(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_PUMP}
      {...props}
      _style={extendStyle(HORIZONTAL_PUMP, props)}
    />
  )
}
