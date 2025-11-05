import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PITOT_TUBE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.pitot_tube;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function PitotTube(props: NodeProps) {
  return (
    <Shape {...PITOT_TUBE} {...props} _style={extendStyle(PITOT_TUBE, props)} />
  )
}
