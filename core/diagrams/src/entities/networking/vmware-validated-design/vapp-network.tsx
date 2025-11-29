import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VAPP_NETWORK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vapp_network;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function VappNetwork(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VAPP_NETWORK)} />
}
