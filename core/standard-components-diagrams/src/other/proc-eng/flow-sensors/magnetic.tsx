import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAGNETIC = {
  _style:
    'shape=mxgraph.pid.flow_sensors.magnetic;dashed=0;align=center;html=1;fontSize=25;',
  _width: 50,
  _height: 50,
}

export function Magnetic(props: DiagramNodeProps) {
  return <Shape {...MAGNETIC} {...props} />
}
