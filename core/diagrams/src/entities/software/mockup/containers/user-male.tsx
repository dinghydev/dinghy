import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_MALE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.containers.userMale;strokeColor=#666666;strokeColor2=#008cff;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function UserMale(props: DiagramNodeProps) {
  return (
    <Shape {...USER_MALE} {...props} _style={extendStyle(USER_MALE, props)} />
  )
}
