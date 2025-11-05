import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BJT_NPN_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.npn_transistor_5;',
  },
  _width: 64,
  _height: 100,
}

export function BjtNpn2(props: NodeProps) {
  return (
    <Shape {...BJT_NPN_2} {...props} _style={extendStyle(BJT_NPN_2, props)} />
  )
}
