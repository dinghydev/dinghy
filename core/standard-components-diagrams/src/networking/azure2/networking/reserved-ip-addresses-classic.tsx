import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESERVED_IP_ADDRESSES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Reserved_IP_Addresses_Classic.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 55.00000000000001,
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
