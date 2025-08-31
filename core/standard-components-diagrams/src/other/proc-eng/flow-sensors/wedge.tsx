import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.wedge;',
  },
  _width: 60,
  _height: 60,
}

export function Wedge(props: DiagramNodeProps) {
  return <Shape {...WEDGE} {...props} _style={extendStyle(WEDGE, props)} />
}
