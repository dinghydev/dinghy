import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_SECURITY_GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Application_Security_Groups.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 68,
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
