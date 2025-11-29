import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HAVIP_HIGH_AVAILABILITY_VIRTUAL_IP_ADDRESS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.havip_high-availability_virtual_ip_address;',
  },
  _original_width: 52.5,
  _original_height: 52.5,
}

export function HavipHighAvailabilityVirtualIpAddress(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, HAVIP_HIGH_AVAILABILITY_VIRTUAL_IP_ADDRESS)}
    />
  )
}
