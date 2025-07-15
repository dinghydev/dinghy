import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGEMENT_ROLE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.management_role;',
  _width: 45,
  _height: 45,
}

export function ManagementRole(props: DiagramNodeProps) {
  return <Shape {...MANAGEMENT_ROLE} {...props} />
}
