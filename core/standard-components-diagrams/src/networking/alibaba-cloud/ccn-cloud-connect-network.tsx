import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CCN_CLOUD_CONNECT_NETWORK = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ccn_cloud_connect_network;',
  _width: 56.1,
  _height: 45.9,
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
