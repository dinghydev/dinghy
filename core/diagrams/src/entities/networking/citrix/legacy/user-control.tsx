import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.user_control;',
  },
  _width: 103,
  _height: 84,
}

export function UserControl(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USER_CONTROL)} />
}
