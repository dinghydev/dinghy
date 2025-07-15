import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VPC_VIRTUAL_PRIVATE_CLOUD = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vpc_virtual_private_cloud;',
  _width: 57,
  _height: 36.6,
}

export function VpcVirtualPrivateCloud(props: DiagramNodeProps) {
  return <Shape {...VPC_VIRTUAL_PRIVATE_CLOUD} {...props} />
}
