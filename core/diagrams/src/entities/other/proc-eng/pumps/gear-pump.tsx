import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GEAR_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.gear_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 57,
  _height: 91,
}

export function GearPump(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GEAR_PUMP)} />
}
