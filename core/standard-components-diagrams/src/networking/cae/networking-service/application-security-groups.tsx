import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_SECURITY_GROUPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Security_Groups.svg;strokeColor=none;',
  },
  _width: 37,
  _height: 50,
}

export function ApplicationSecurityGroups(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_SECURITY_GROUPS}
      {...props}
      _style={extendStyle(APPLICATION_SECURITY_GROUPS, props)}
    />
  )
}
