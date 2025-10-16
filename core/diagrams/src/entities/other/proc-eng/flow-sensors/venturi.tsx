import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VENTURI = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.venturi;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function Venturi(props: DiagramNodeProps) {
  return <Shape {...VENTURI} {...props} _style={extendStyle(VENTURI, props)} />
}
