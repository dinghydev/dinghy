import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AVERGING_PITOT_TUBE = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.averging_pitot_tube;',
  _width: 50,
  _height: 50,
}

export function AvergingPitotTube(props: DiagramNodeProps) {
  return <Shape {...AVERGING_PITOT_TUBE} {...props} />
}
