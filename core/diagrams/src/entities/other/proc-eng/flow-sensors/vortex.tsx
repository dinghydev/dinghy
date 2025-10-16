import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VORTEX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.vortex;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Vortex(props: DiagramNodeProps) {
  return <Shape {...VORTEX} {...props} _style={extendStyle(VORTEX, props)} />
}
