import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VMWARE_HOST = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vmware_host;',
  },
  _width: 108,
  _height: 104,
}

export function VmwareHost(props: NodeProps) {
  return (
    <Shape
      {...VMWARE_HOST}
      {...props}
      _style={extendStyle(VMWARE_HOST, props)}
    />
  )
}
