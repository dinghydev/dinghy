import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EIP_ELASTIC_IP_ADDRESS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.eip_elastic_ip_address;',
  },
  _original_width: 47.400000000000006,
  _original_height: 46.5,
}

export function EipElasticIpAddress(props: NodeProps) {
  return (
    <Shape
      {...EIP_ELASTIC_IP_ADDRESS}
      {...props}
      _style={extendStyle(EIP_ELASTIC_IP_ADDRESS, props)}
    />
  )
}
