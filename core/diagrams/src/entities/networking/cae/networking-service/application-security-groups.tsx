import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_SECURITY_GROUPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Security_Groups.svg;strokeColor=none;',
  },
  _width: 37,
  _height: 50,
}

export function ApplicationSecurityGroups(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, APPLICATION_SECURITY_GROUPS)}
    />
  )
}
