import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AND_IEC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.and;',
  },
  _width: 60,
  _height: 80,
}

export function AndIec(props: NodeProps) {
  return <Shape {...AND_IEC} {...props} _style={extendStyle(AND_IEC, props)} />
}
