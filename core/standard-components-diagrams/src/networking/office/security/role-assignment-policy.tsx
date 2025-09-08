import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLE_ASSIGNMENT_POLICY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.role_assignment_policy;',
  },
  _original_width: 55,
  _original_height: 54,
}

export function RoleAssignmentPolicy(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_ASSIGNMENT_POLICY}
      {...props}
      _style={extendStyle(ROLE_ASSIGNMENT_POLICY, props)}
    />
  )
}
