import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NORMALLY_CLOSED_GATE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;defState=closed',
  },
  _width: 100,
  _height: 60,
}

export function NormallyClosedGateValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...NORMALLY_CLOSED_GATE_VALVE}
      {...props}
      _style={extendStyle(NORMALLY_CLOSED_GATE_VALVE, props)}
    />
  )
}
