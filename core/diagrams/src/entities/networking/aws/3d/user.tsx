import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.end_user;strokeColor=none;fillColor=#777777;aspect=fixed;',
  },
  _width: 49,
  _height: 100.46,
}

export function User(props: NodeProps) {
  return <Shape {...USER} {...props} _style={extendStyle(USER, props)} />
}
