import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TARGET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.target;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Target(props: DiagramNodeProps) {
  return <Shape {...TARGET} {...props} _style={extendStyle(TARGET, props)} />
}
