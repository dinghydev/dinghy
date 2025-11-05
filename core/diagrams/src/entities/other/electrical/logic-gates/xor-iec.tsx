import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XOR_IEC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.xor;',
  },
  _width: 60,
  _height: 80,
}

export function XorIec(props: NodeProps) {
  return <Shape {...XOR_IEC} {...props} _style={extendStyle(XOR_IEC, props)} />
}
