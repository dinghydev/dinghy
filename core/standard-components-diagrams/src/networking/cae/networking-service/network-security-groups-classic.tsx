import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_SECURITY_GROUPS_CLASSIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Network_Security_Groups_Classic.svg;strokeColor=none;',
  },
  _original_width: 37,
  _original_height: 50,
}

export function NetworkSecurityGroupsClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_SECURITY_GROUPS_CLASSIC}
      {...props}
      _style={extendStyle(NETWORK_SECURITY_GROUPS_CLASSIC, props)}
    />
  )
}
