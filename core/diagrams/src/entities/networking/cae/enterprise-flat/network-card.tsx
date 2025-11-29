import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_CARD = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.network_card',
  },
  _width: 50,
  _height: 35,
}

export function NetworkCard(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORK_CARD)} />
}
