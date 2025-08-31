import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_NO_NETWORK = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_no_network;',
  _width: 58,
  _height: 46,
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
