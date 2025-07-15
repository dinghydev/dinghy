import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_SECURITY_GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Security_Groups.svg;',
  _width: 56.00000000000001,
  _height: 68,
}

export function NetworkSecurityGroups(props: DiagramNodeProps) {
  return <Shape {...NETWORK_SECURITY_GROUPS} {...props} />
}
