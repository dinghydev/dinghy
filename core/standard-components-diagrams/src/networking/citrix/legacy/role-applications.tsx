import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLE_APPLICATIONS = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_applications;',
  _width: 38,
  _height: 38,
}

export function RoleApplications(props: DiagramNodeProps) {
  return <Shape {...ROLE_APPLICATIONS} {...props} />
}
