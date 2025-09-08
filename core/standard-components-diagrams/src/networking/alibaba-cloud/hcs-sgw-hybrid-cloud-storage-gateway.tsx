import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HCS_SGW_HYBRID_CLOUD_STORAGE_GATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hcs-sgw_hybrid_cloud_storage_gateway;',
  },
  _original_width: 51,
  _original_height: 39.900000000000006,
}

export function HcsSgwHybridCloudStorageGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...HCS_SGW_HYBRID_CLOUD_STORAGE_GATEWAY}
      {...props}
      _style={extendStyle(HCS_SGW_HYBRID_CLOUD_STORAGE_GATEWAY, props)}
    />
  )
}
