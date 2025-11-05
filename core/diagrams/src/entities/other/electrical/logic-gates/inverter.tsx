import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INVERTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.inverter_2',
  },
  _width: 100,
  _height: 60,
}

export function Inverter(props: NodeProps) {
  return (
    <Shape {...INVERTER} {...props} _style={extendStyle(INVERTER, props)} />
  )
}
