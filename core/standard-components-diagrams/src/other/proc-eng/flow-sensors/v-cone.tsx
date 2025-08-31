import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const V_CONE = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.v-cone;',
  _width: 60,
  _height: 60,
}

export function VCone(props: DiagramNodeProps) {
  return <Shape {...V_CONE} {...props} _style={extendStyle(V_CONE, props)} />
}
