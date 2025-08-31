import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_SECURITY_PERIMETERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Network_Security_Perimeters.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function NetworkSecurityPerimeters(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_SECURITY_PERIMETERS}
      {...props}
      _style={extendStyle(NETWORK_SECURITY_PERIMETERS, props)}
    />
  )
}
