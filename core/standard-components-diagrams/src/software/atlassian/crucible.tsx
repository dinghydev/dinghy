import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
