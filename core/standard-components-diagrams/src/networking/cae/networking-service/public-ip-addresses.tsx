import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUBLIC_IP_ADDRESSES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Service_IPAddress.svg;',
  _width: 50,
  _height: 42,
}

export function PublicIpAddresses(props: DiagramNodeProps) {
  return <Shape {...PUBLIC_IP_ADDRESSES} {...props} />
}
