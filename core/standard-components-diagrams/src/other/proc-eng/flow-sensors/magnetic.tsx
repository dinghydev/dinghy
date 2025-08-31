import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAGNETIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.flow_sensors.magnetic;dashed=0;align=center;html=1;fontSize=25;',
  },
  _width: 60,
  _height: 60,
}

export function Magnetic(props: DiagramNodeProps) {
  return (
    <Shape {...MAGNETIC} {...props} _style={extendStyle(MAGNETIC, props)} />
  )
}
