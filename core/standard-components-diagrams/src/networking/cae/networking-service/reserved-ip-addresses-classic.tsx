import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESERVED_IP_ADDRESSES_CLASSIC = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ClassicIPAddress.svg;',
  _width: 50,
  _height: 42,
}

export function ReservedIpAddressesClassic(props: DiagramNodeProps) {
  return <Shape {...RESERVED_IP_ADDRESSES_CLASSIC} {...props} />
}
