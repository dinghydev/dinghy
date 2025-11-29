import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BJT_PNP_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pnp_transistor_5;',
  },
  _width: 64,
  _height: 100,
}

export function BjtPnp2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BJT_PNP_2)} />
}
