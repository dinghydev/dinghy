import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_SECURITY_PERIMETERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Network_Security_Perimeters.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function NetworkSecurityPerimeters(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, NETWORK_SECURITY_PERIMETERS)}
    />
  )
}
