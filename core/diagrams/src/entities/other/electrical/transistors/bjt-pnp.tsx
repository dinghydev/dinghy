import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BJT_PNP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pnp_transistor_1;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function BjtPnp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BJT_PNP)} />
}
