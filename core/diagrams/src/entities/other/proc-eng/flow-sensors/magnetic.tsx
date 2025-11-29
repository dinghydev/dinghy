import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAGNETIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.flow_sensors.magnetic;dashed=0;align=center;html=1;fontSize=25;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Magnetic(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAGNETIC)} />
}
