import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_SECURITY_GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Application_Security_Groups.svg;',
  _width: 56.00000000000001,
  _height: 68,
}

export function ApplicationSecurityGroups(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_SECURITY_GROUPS} {...props} />
}
