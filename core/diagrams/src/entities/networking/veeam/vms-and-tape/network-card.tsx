import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_CARD = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.network_card;',
  },
  _width: 42.8,
  _height: 30,
}

export function NetworkCard(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORK_CARD)} />
}
