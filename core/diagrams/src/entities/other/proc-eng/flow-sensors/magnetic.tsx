import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAGNETIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.flow_sensors.magnetic;dashed=0;align=center;html=1;fontSize=25;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Magnetic(props: DiagramNodeProps) {
  return (
    <Shape {...MAGNETIC} {...props} _style={extendStyle(MAGNETIC, props)} />
  )
}
