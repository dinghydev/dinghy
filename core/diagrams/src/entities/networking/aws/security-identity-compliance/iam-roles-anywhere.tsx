import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IAM_ROLES_ANYWHERE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.identity_access_management_iam_roles_anywhere;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function IamRolesAnywhere(props: NodeProps) {
  return (
    <Shape
      {...IAM_ROLES_ANYWHERE}
      {...props}
      _style={extendStyle(IAM_ROLES_ANYWHERE, props)}
    />
  )
}
