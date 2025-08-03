import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUBLIC_IP_ADDRESSES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Public_IP_Addresses.svg;strokeColor=none;',
  _width: 65,
  _height: 52,
}

export function PublicIpAddresses(props: DiagramNodeProps) {
  return <Shape {...PUBLIC_IP_ADDRESSES} {...props} />
}
