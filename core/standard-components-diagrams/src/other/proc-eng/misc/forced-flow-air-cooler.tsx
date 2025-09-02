import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORCED_FLOW_AIR_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forced_flow_air_cooler;',
  },
  _original_width: 70,
  _original_height: 30,
}

export function ForcedFlowAirCooler(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORCED_FLOW_AIR_COOLER}
      {...props}
      _style={extendStyle(FORCED_FLOW_AIR_COOLER, props)}
    />
  )
}
