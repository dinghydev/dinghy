import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUBLIC_IP_ADDRESSES_CLASSIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Public_IP_Addresses_Classic.svg;',
  _width: 64,
  _height: 52,
}

export function PublicIpAddressesClassic(props: DiagramNodeProps) {
  return <Shape {...PUBLIC_IP_ADDRESSES_CLASSIC} {...props} />
}
