import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PITOT_TUBE = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.pitot_tube;',
  _width: 60,
  _height: 60,
}

export function PitotTube(props: DiagramNodeProps) {
  return (
    <Shape {...PITOT_TUBE} {...props} _style={extendStyle(PITOT_TUBE, props)} />
  )
}
