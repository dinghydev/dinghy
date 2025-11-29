import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESERVED_IP_ADDRESSES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Reserved_IP_Addresses_Classic.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 55.00000000000001,
}

export function ReservedIpAddressesClassic(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, RESERVED_IP_ADDRESSES_CLASSIC)}
    />
  )
}
