import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CORIOLIS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.coriolis;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Coriolis(props: DiagramNodeProps) {
  return (
    <Shape {...CORIOLIS} {...props} _style={extendStyle(CORIOLIS, props)} />
  )
}
