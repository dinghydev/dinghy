import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXCESS_FLOW_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.excess_flow_valve2;',
  },
  _width: 50,
  _height: 25,
}

export function ExcessFlowValve(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXCESS_FLOW_VALVE)} />
}
