import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLE_RECEIVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_receiver;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  _width: 38,
  _height: 38,
}

export function RoleReceiver(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_RECEIVER}
      {...props}
      _style={extendStyle(ROLE_RECEIVER, props)}
    />
  )
}
