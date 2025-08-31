import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUCED_FLOW_AIR_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.induced_flow_air_cooler;',
  },
  _width: 93,
  _height: 30,
}

export function InducedFlowAirCooler(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUCED_FLOW_AIR_COOLER}
      {...props}
      _style={extendStyle(INDUCED_FLOW_AIR_COOLER, props)}
    />
  )
}
