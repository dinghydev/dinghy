import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USERS = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.users;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 24,
  _height: 16,
}

export function Users(props: DiagramNodeProps) {
  return <Shape {...USERS} {...props} _style={extendStyle(USERS, props)} />
}
