import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HAVIP_HIGH_AVAILABILITY_VIRTUAL_IP_ADDRESS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.havip_high-availability_virtual_ip_address;',
  },
  _width: 60,
  _height: 60,
}

export function HavipHighAvailabilityVirtualIpAddress(props: DiagramNodeProps) {
  return (
    <Shape
      {...HAVIP_HIGH_AVAILABILITY_VIRTUAL_IP_ADDRESS}
      {...props}
      _style={extendStyle(HAVIP_HIGH_AVAILABILITY_VIRTUAL_IP_ADDRESS, props)}
    />
  )
}
