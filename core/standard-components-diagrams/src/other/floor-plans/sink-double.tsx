import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINK_DOUBLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_double2;',
  },
  _original_width: 80,
  _original_height: 35,
}

export function SinkDouble(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINK_DOUBLE}
      {...props}
      _style={extendStyle(SINK_DOUBLE, props)}
    />
  )
}
