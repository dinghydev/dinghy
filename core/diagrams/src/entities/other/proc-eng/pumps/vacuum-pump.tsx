import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VACUUM_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.vacuum_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 99,
  _height: 49,
}

export function VacuumPump(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VACUUM_PUMP)} />
}
