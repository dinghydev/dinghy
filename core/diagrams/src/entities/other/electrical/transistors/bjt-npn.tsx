import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BJT_NPN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.npn_transistor_1;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function BjtNpn(props: NodeProps) {
  return <Shape {...BJT_NPN} {...props} _style={extendStyle(BJT_NPN, props)} />
}
