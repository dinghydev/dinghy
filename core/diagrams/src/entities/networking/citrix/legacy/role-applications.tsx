import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLE_APPLICATIONS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_applications;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function RoleApplications(props: NodeProps) {
  return (
    <Shape
      {...ROLE_APPLICATIONS}
      {...props}
      _style={extendStyle(ROLE_APPLICATIONS, props)}
    />
  )
}
