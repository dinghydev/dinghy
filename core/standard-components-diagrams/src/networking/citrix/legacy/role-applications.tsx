import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLE_APPLICATIONS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_applications;',
  },
  _width: 38,
  _height: 38,
}

export function RoleApplications(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_APPLICATIONS}
      {...props}
      _style={extendStyle(ROLE_APPLICATIONS, props)}
    />
  )
}
