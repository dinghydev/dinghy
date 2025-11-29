import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTI_SELECT_WITH_AVATARS = {
  _style: {
    entity:
      'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;arcSize=1',
  },
  _width: 2,
  _height: 320,
}

export function MultiSelectWithAvatars(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MULTI_SELECT_WITH_AVATARS)} />
  )
}
