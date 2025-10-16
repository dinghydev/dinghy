import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUBLIC_IP_ADDRESSES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Public_IP_Addresses_Classic.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function PublicIpAddressesClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUBLIC_IP_ADDRESSES_CLASSIC}
      {...props}
      _style={extendStyle(PUBLIC_IP_ADDRESSES_CLASSIC, props)}
    />
  )
}
