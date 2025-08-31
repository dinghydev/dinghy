import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.user_control;',
  },
  _width: 103,
  _height: 84,
}

export function UserControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_CONTROL}
      {...props}
      _style={extendStyle(USER_CONTROL, props)}
    />
  )
}
