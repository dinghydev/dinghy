import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.user;',
  },
  _width: 30,
  _height: 30,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} _style={extendStyle(USER, props)} />
}
