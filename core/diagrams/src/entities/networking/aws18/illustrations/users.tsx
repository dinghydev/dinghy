import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USERS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.illustration_users;pointerEvents=1',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Users(props: NodeProps) {
  return <Shape {...USERS} {...props} _style={extendStyle(USERS, props)} />
}
