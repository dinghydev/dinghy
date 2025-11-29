import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOSFET_N = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.n-channel_mosfet_1;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function MosfetN(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOSFET_N)} />
}
