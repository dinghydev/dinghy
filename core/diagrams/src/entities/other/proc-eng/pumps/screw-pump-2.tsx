import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCREW_PUMP_2 = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.screw_pump_2;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 123,
  _height: 40,
}

export function ScrewPump2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCREW_PUMP_2)} />
}
