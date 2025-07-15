import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLE_ASSIGNMENT_POLICY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.role_assignment_policy;',
  _width: 55,
  _height: 54,
}

export function RoleAssignmentPolicy(props: DiagramNodeProps) {
  return <Shape {...ROLE_ASSIGNMENT_POLICY} {...props} />
}
