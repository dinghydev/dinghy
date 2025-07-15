import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RAM_RESOURCE_ACCESS_MANAGEMENT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ram_resource_access_management;',
  _width: 55.2,
  _height: 36,
}

export function RamResourceAccessManagement(props: DiagramNodeProps) {
  return <Shape {...RAM_RESOURCE_ACCESS_MANAGEMENT} {...props} />
}
