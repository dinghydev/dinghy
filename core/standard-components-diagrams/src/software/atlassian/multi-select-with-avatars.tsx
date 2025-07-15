import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTI_SELECT_WITH_AVATARS = {
  _style: 'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;arcSize=1',
  _width: 2,
  _height: 320,
}

export function MultiSelectWithAvatars(props: DiagramNodeProps) {
  return <Shape {...MULTI_SELECT_WITH_AVATARS} {...props} />
}
