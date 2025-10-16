import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POSITIVE_DISPLACEMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.positive_displacement;',
  },
  _width: 50,
  _height: 30,
}

export function PositiveDisplacement(props: DiagramNodeProps) {
  return (
    <Shape
      {...POSITIVE_DISPLACEMENT}
      {...props}
      _style={extendStyle(POSITIVE_DISPLACEMENT, props)}
    />
  )
}
