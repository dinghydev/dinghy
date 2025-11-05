import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CRUCIBLE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Crucible_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 61,
  _original_height: 61,
}

export function Crucible(props: NodeProps) {
  return (
    <Shape {...CRUCIBLE} {...props} _style={extendStyle(CRUCIBLE, props)} />
  )
}
