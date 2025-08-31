import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVERGING_PITOT_TUBE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.averging_pitot_tube;',
  },
  _width: 60,
  _height: 60,
}

export function AvergingPitotTube(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVERGING_PITOT_TUBE}
      {...props}
      _style={extendStyle(AVERGING_PITOT_TUBE, props)}
    />
  )
}
