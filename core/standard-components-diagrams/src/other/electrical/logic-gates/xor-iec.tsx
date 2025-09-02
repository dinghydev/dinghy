import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XOR_IEC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.xor;',
  },
  _original_width: 60,
  _original_height: 80,
}

export function XorIec(props: DiagramNodeProps) {
  return <Shape {...XOR_IEC} {...props} _style={extendStyle(XOR_IEC, props)} />
}
