import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HCS_SGW_HYBRID_CLOUD_STORAGE_GATEWAY = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hcs-sgw_hybrid_cloud_storage_gateway;',
  _width: 51,
  _height: 39.900000000000006,
}

export function HcsSgwHybridCloudStorageGateway(props: DiagramNodeProps) {
  return <Shape {...HCS_SGW_HYBRID_CLOUD_STORAGE_GATEWAY} {...props} />
}
