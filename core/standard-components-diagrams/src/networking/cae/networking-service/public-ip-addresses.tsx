import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUBLIC_IP_ADDRESSES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Service_IPAddress.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
}

export function PublicIpAddresses(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUBLIC_IP_ADDRESSES}
      {...props}
      _style={extendStyle(PUBLIC_IP_ADDRESSES, props)}
    />
  )
}
