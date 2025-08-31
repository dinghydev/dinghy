import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TARGET = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.target;',
  _width: 60,
  _height: 60,
}

export function Target(props: DiagramNodeProps) {
  return <Shape {...TARGET} {...props} _style={extendStyle(TARGET, props)} />
}
