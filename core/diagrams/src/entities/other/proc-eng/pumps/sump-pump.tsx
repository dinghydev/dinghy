import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUMP_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.sump_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 103,
  _height: 186,
}

export function SumpPump(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUMP_PUMP)} />
}
