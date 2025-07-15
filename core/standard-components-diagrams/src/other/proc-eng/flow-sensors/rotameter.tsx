import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROTAMETER = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.rotameter;',
  _width: 75,
  _height: 50,
}

export function Rotameter(props: DiagramNodeProps) {
  return <Shape {...ROTAMETER} {...props} />
}
