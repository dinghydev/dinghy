import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUBLIC_IP_ADDRESSES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Public_IP_Addresses.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function PublicIpAddresses(props: NodeProps) {
  return (
    <Shape
      {...PUBLIC_IP_ADDRESSES}
      {...props}
      _style={extendStyle(PUBLIC_IP_ADDRESSES, props)}
    />
  )
}
