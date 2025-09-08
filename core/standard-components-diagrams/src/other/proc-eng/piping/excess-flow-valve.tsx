import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCESS_FLOW_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.excess_flow_valve2;',
  },
  _original_width: 50,
  _original_height: 25,
}

export function ExcessFlowValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCESS_FLOW_VALVE}
      {...props}
      _style={extendStyle(EXCESS_FLOW_VALVE, props)}
    />
  )
}
