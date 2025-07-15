import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_SECURITY_PERIMETERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Network_Security_Perimeters.svg;',
  _width: 68,
  _height: 68,
}

export function NetworkSecurityPerimeters(props: DiagramNodeProps) {
  return <Shape {...NETWORK_SECURITY_PERIMETERS} {...props} />
}
