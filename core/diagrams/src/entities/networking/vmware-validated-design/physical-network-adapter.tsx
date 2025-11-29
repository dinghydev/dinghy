import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHYSICAL_NETWORK_ADAPTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.physical_network_adapter;',
  },
  _width: 50,
  _height: 28.999999999999996,
}

export function PhysicalNetworkAdapter(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PHYSICAL_NETWORK_ADAPTER)} />
  )
}
