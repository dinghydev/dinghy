import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EIP_ELASTIC_IP_ADDRESS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.eip_elastic_ip_address;',
  _width: 47.400000000000006,
  _height: 46.5,
}

export function EipElasticIpAddress(props: DiagramNodeProps) {
  return <Shape {...EIP_ELASTIC_IP_ADDRESS} {...props} />
}
