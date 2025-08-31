import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_MALE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.containers.userMale;strokeColor=#666666;strokeColor2=#008cff;',
  _width: 60,
  _height: 60,
}

export function UserMale(props: DiagramNodeProps) {
  return (
    <Shape {...USER_MALE} {...props} _style={extendStyle(USER_MALE, props)} />
  )
}
