import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORCED_FLOW_AIR_COOLER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forced_flow_air_cooler;',
  _width: 70,
  _height: 30,
}

export function ForcedFlowAirCooler(props: DiagramNodeProps) {
  return <Shape {...FORCED_FLOW_AIR_COOLER} {...props} />
}
