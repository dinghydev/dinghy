import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CCN_CLOUD_CONNECT_NETWORK = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ccn_cloud_connect_network;',
  },
  _original_width: 56.1,
  _original_height: 45.9,
}

export function CcnCloudConnectNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...CCN_CLOUD_CONNECT_NETWORK}
      {...props}
      _style={extendStyle(CCN_CLOUD_CONNECT_NETWORK, props)}
    />
  )
}
