import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CMN_CLOUD_MANAGED_NETWORK = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cmn_cloud_managed_network;',
  },
  _original_width: 51.9,
  _original_height: 37.8,
}

export function CmnCloudManagedNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...CMN_CLOUD_MANAGED_NETWORK}
      {...props}
      _style={extendStyle(CMN_CLOUD_MANAGED_NETWORK, props)}
    />
  )
}
