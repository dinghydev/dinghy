import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_SECURITY_GROUPS_CLASSIC = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Network_Security_Groups_Classic.svg;',
  _width: 37,
  _height: 50,
}

export function NetworkSecurityGroupsClassic(props: DiagramNodeProps) {
  return <Shape {...NETWORK_SECURITY_GROUPS_CLASSIC} {...props} />
}
