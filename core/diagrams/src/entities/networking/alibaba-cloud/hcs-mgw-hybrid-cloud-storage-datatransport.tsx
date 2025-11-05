import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HCS_MGW_HYBRID_CLOUD_STORAGE_DATATRANSPORT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hcs-mgw_hybrid_cloud_storage_datatransport;',
  },
  _original_width: 50.699999999999996,
  _original_height: 40.5,
}

export function HcsMgwHybridCloudStorageDatatransport(props: NodeProps) {
  return (
    <Shape
      {...HCS_MGW_HYBRID_CLOUD_STORAGE_DATATRANSPORT}
      {...props}
      _style={extendStyle(HCS_MGW_HYBRID_CLOUD_STORAGE_DATATRANSPORT, props)}
    />
  )
}
