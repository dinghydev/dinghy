import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USERS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.users;',
  },
  _width: 50,
  _height: 26.435,
}

export function Users(props: DiagramNodeProps) {
  return <Shape {...USERS} {...props} _style={extendStyle(USERS, props)} />
}
