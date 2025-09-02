import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CEN_CLOUD_ENTERPRISE_NETWORK = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cen_cloud_enterprise_network;',
  },
  _original_width: 53.4,
  _original_height: 54.900000000000006,
}

export function CenCloudEnterpriseNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...CEN_CLOUD_ENTERPRISE_NETWORK}
      {...props}
      _style={extendStyle(CEN_CLOUD_ENTERPRISE_NETWORK, props)}
    />
  )
}
