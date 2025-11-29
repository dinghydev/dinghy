import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_SECURITY_GROUPS_CLASSIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Network_Security_Groups_Classic.svg;strokeColor=none;',
  },
  _width: 37,
  _height: 50,
}

export function NetworkSecurityGroupsClassic(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, NETWORK_SECURITY_GROUPS_CLASSIC)}
    />
  )
}
