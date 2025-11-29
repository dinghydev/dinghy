import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IP_ADDRESS_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/IP_Address_Manager.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60.440000000000005,
}

export function IpAddressManager(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IP_ADDRESS_MANAGER)} />
}
