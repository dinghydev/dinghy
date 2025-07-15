import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TARGET = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.target;',
  _width: 50,
  _height: 50,
}

export function Target(props: DiagramNodeProps) {
  return <Shape {...TARGET} {...props} />
}
