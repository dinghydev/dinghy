import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CMN_CLOUD_MANAGED_NETWORK = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cmn_cloud_managed_network;',
  },
  _width: 51.9,
  _height: 37.8,
}

export function CmnCloudManagedNetwork(props: NodeProps) {
  return (
    <Shape
      {...CMN_CLOUD_MANAGED_NETWORK}
      {...props}
      _style={extendStyle(CMN_CLOUD_MANAGED_NETWORK, props)}
    />
  )
}
