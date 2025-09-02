import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const V_CONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.v-cone;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function VCone(props: DiagramNodeProps) {
  return <Shape {...V_CONE} {...props} _style={extendStyle(V_CONE, props)} />
}
