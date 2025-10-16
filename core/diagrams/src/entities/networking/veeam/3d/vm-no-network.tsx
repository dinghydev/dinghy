import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_NO_NETWORK = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_no_network;',
  },
  _original_width: 58,
  _original_height: 46,
}

export function VmNoNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_NO_NETWORK}
      {...props}
      _style={extendStyle(VM_NO_NETWORK, props)}
    />
  )
}
