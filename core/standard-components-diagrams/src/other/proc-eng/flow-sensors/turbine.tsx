import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TURBINE = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.turbine;',
  _width: 50,
  _height: 50,
}

export function Turbine(props: DiagramNodeProps) {
  return <Shape {...TURBINE} {...props} />
}
