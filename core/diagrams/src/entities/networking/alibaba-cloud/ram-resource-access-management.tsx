import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RAM_RESOURCE_ACCESS_MANAGEMENT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ram_resource_access_management;',
  },
  _width: 55.2,
  _height: 36,
}

export function RamResourceAccessManagement(props: NodeProps) {
  return (
    <Shape
      {...RAM_RESOURCE_ACCESS_MANAGEMENT}
      {...props}
      _style={extendStyle(RAM_RESOURCE_ACCESS_MANAGEMENT, props)}
    />
  )
}
