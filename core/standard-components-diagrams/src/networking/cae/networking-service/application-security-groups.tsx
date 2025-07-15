import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_SECURITY_GROUPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Security_Groups.svg;',
  _width: 37,
  _height: 50,
}

export function ApplicationSecurityGroups(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_SECURITY_GROUPS} {...props} />
}
