import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VORTEX = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.vortex;',
  _width: 50,
  _height: 50,
}

export function Vortex(props: DiagramNodeProps) {
  return <Shape {...VORTEX} {...props} />
}
