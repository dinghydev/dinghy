import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VMWARE_HOST = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vmware_host;',
  },
  _width: 110,
  _height: 98,
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
