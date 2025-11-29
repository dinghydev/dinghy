import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_FEMALE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.containers.userFemale;strokeColor=#666666;strokeColor2=#008cff;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function UserFemale(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USER_FEMALE)} />
}
