import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=or;negating=1;negSize=0.15;',
  },
  _width: 100,
  _height: 60,
}

export function Nor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NOR)} />
}
