import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP_ADDRESS_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/IP_Address_Manager.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60.440000000000005,
}

export function IpAddressManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...IP_ADDRESS_MANAGER}
      {...props}
      _style={extendStyle(IP_ADDRESS_MANAGER, props)}
    />
  )
}
