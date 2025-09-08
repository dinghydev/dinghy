import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_SELECT_WITH_AVATARS = {
  _style: {
    entity:
      'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;arcSize=1',
  },
  _original_width: 2,
  _original_height: 320,
}

export function MultiSelectWithAvatars(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_SELECT_WITH_AVATARS}
      {...props}
      _style={extendStyle(MULTI_SELECT_WITH_AVATARS, props)}
    />
  )
}
