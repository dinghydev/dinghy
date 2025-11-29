import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SECURITY_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_security_center;',
  },
  _original_width: 43.199999999999996,
  _original_height: 48.9,
}

export function CloudSecurityCenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUD_SECURITY_CENTER)} />
}
