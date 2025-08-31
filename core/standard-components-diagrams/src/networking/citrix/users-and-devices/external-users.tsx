import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTERNAL_USERS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.external_users;',
  },
  _width: 48.449999999999996,
  _height: 50,
}

export function ExternalUsers(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_USERS}
      {...props}
      _style={extendStyle(EXTERNAL_USERS, props)}
    />
  )
}
