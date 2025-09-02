import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESERVED_IP_ADDRESSES_CLASSIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ClassicIPAddress.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function ReservedIpAddressesClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESERVED_IP_ADDRESSES_CLASSIC}
      {...props}
      _style={extendStyle(RESERVED_IP_ADDRESSES_CLASSIC, props)}
    />
  )
}
