import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLUME = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.flume;pointerEvents=1;',
  _width: 50,
  _height: 50,
}

export function Flume(props: DiagramNodeProps) {
  return <Shape {...FLUME} {...props} />
}
