import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HCS_HGW_HYBRID_CLOUD_STORAGE_ARRAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hcs-hgw_hybrid_cloud_storage_array;',
  },
  _original_width: 40.5,
  _original_height: 47.1,
}

export function HcsHgwHybridCloudStorageArray(props: DiagramNodeProps) {
  return (
    <Shape
      {...HCS_HGW_HYBRID_CLOUD_STORAGE_ARRAY}
      {...props}
      _style={extendStyle(HCS_HGW_HYBRID_CLOUD_STORAGE_ARRAY, props)}
    />
  )
}
