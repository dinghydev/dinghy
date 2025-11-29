import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CWH_CLOUD_WEB_HOSTING = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cwh_cloud_web_hosting;',
  },
  _original_width: 49.8,
  _original_height: 45.6,
}

export function CwhCloudWebHosting(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CWH_CLOUD_WEB_HOSTING)} />
}
