import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const V_CONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.v-cone;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function VCone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, V_CONE)} />
}
