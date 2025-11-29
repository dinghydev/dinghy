import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_NETWORK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.virtual_network;pointerEvents=1;',
  },
  _width: 50,
  _height: 27.500000000000004,
}

export function VirtualNetwork(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_NETWORK)} />
}
