import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUBLIC_IP_ADDRESSES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Public_IP_Addresses.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
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
