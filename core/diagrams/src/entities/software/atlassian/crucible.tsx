import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CRUCIBLE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Crucible_Logo.svg;strokeColor=none;',
  },
  _original_width: 61,
  _original_height: 61,
}

export function Crucible(props: DiagramNodeProps) {
  return (
    <Shape {...CRUCIBLE} {...props} _style={extendStyle(CRUCIBLE, props)} />
  )
}
