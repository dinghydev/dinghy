import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROTAMETER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.rotameter;',
  },
  _original_width: 75,
  _original_height: 50,
}

export function Rotameter(props: DiagramNodeProps) {
  return (
    <Shape {...ROTAMETER} {...props} _style={extendStyle(ROTAMETER, props)} />
  )
}
