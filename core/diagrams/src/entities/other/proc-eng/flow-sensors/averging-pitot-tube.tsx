import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVERGING_PITOT_TUBE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.averging_pitot_tube;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AvergingPitotTube(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AVERGING_PITOT_TUBE)} />
}
